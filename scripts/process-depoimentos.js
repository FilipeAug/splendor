#!/usr/bin/env node
/**
 * Script: process-depoimentos.js
 * Fonte de verdade: depoimentos_210_organizados.xlsx
 * Cada linha do Excel já tem: categoria, nome, cidade, frase de destaque,
 * tempo p/ resultado e link do Drive — sem depender dos .txt.
 *
 * Uso: node scripts/process-depoimentos.js
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

const __dirname = dirname(fileURLToPath(import.meta.url));
const EXCEL = resolve(__dirname, "../../Depoimentos/depoimentos_210_organizados.xlsx");
const OUTPUT = resolve(__dirname, "../src/data/depoimentos.json");

// Mapeamento de categoria (como aparece no Excel) → slug interno + label
const categoriaMap = {
  "Acido Urico":            { condicao: "Acido_Urico",            label: "Ácido Úrico" },
  "Alergia":                { condicao: "Alergia",                 label: "Alergia" },
  "Ansiedade":              { condicao: "Ansiedade",               label: "Ansiedade" },
  "Arritmia Cardiaca":      { condicao: "Arritmia_Cardiaca",       label: "Arritmia Cardíaca" },
  "Artrite Artrose":        { condicao: "Artrite_Artrose",         label: "Artrite / Artrose" },
  "Asma Bronquite":         { condicao: "Asma_Bronquite",          label: "Asma / Bronquite" },
  "Cancer":                 { condicao: "Cancer",                  label: "Câncer" },
  "Cefaleia":               { condicao: "Cefaleia",                label: "Cefaleia" },
  "Cicatrizacao":           { condicao: "Cicatrizacao",            label: "Cicatrização" },
  "Circulacao":             { condicao: "Circulacao",              label: "Circulação" },
  "Colesterol":             { condicao: "Colesterol",              label: "Colesterol" },
  "Convulsao":              { condicao: "Convulsao",               label: "Convulsão" },
  "Cordas Vocais":          { condicao: "Cordas_Vocais",           label: "Cordas Vocais" },
  "Correcao de Taxas":      { condicao: "Correcao_de_Taxas",       label: "Correção de Taxas" },
  "Depressao":              { condicao: "Depressao",               label: "Depressão" },
  "Derrame":                { condicao: "Derrame",                 label: "Derrame" },
  "Diabetes":               { condicao: "Diabetes",                label: "Diabetes" },
  "Doenca de Crohn":        { condicao: "Doenca_de_Crohn",         label: "Doença de Crohn" },
  "Doencas de Pele":        { condicao: "Doencas_de_Pele",         label: "Doenças de Pele" },
  "Dor no Corpo":           { condicao: "Dor_no_Corpo",            label: "Dor no Corpo" },
  "Enxaqueca":              { condicao: "Enxaqueca",               label: "Enxaqueca" },
  "Esteatose Hepatica":     { condicao: "Esteatose_Hepatica",      label: "Esteatose Hepática" },
  "Estresse":               { condicao: "Estresse",                label: "Estresse" },
  "Fibromialgia":           { condicao: "Fibromialgia",            label: "Fibromialgia" },
  "Gastrite":               { condicao: "Gastrite",                label: "Gastrite" },
  "Hernia de Disco":        { condicao: "Hernia_de_Disco",         label: "Hérnia de Disco" },
  "Inchaco":                { condicao: "Inchaco",                 label: "Inchaço" },
  "Incontinencia Urinaria": { condicao: "Incontinencia_Urinaria",  label: "Incontinência Urinária" },
  "Insonia":                { condicao: "Insonia",                 label: "Insônia" },
  "Intestino Preso":        { condicao: "Intestino_Preso",         label: "Intestino Preso" },
  "Intolerancia Lactose":   { condicao: "Intolerancia_Lactose",    label: "Intolerância à Lactose" },
  "Labirintite":            { condicao: "Labirintite",             label: "Labirintite" },
  "Lupus":                  { condicao: "Lupus",                   label: "Lúpus" },
  "Mal de Parkinson":       { condicao: "Mal_de_Parkinson",        label: "Mal de Parkinson" },
  "Menopausa":              { condicao: "Menopausa",               label: "Menopausa" },
  "Mioma Uterino":          { condicao: "Mioma_Uterino",           label: "Mioma Uterino" },
  "Obesidade":              { condicao: "Obesidade",               label: "Obesidade" },
  "Osteoporose":            { condicao: "Osteoporose",             label: "Osteoporose" },
  "Outras Doencas":         { condicao: "Outras_Doencas",          label: "Outras Doenças" },
  "Pedra da Vesicula":      { condicao: "Pedra_da_Vesicula",       label: "Pedra na Vesícula" },
  "Problema de Pressao":    { condicao: "Problema_de_Pressao",     label: "Pressão Arterial" },
  "Problema Pulmonar":      { condicao: "Problema_Pulmonar",       label: "Problema Pulmonar" },
  "Problema Renal":         { condicao: "Problema_Renal",          label: "Problema Renal" },
  "Problemas Ortopedicos":  { condicao: "Problemas_Ortopedicos",   label: "Problemas Ortopédicos" },
  "Psoriase":               { condicao: "Psoriase",                label: "Psoríase" },
  "Queda de Cabelo":        { condicao: "Queda_de_Cabelo",         label: "Queda de Cabelo" },
  "Reumatismo":             { condicao: "Reumatismo",              label: "Reumatismo" },
  "Sequelas de Acidente":   { condicao: "Sequelas_de_Acidente",    label: "Sequelas de Acidente" },
  "Sinusite":               { condicao: "Sinusite",                label: "Sinusite" },
  "Tireoide":               { condicao: "Tireoide",                label: "Tireoide" },
  "TPM":                    { condicao: "TPM",                     label: "TPM" },
  "Trombose":               { condicao: "Trombose",                label: "Trombose" },
  "Ulcera Varicosa":        { condicao: "Ulcera_Varicosa",         label: "Úlcera Varicosa" },
  "Vitiligo":               { condicao: "Vitiligo",                label: "Vitiligo" },
};

function extractDriveId(link) {
  if (!link) return "";
  const m = link.toString().match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : "";
}

// Limpa frase: remove transcrição bruta / frases muito fragmentadas
function limpezaFrase(frase) {
  if (!frase) return "";
  let f = frase.toString().trim();
  // Remove frases que começam com articuladores de transcrição bruta
  if (/^(e aí|boa noite|então|tudo bem|né)/i.test(f)) {
    // tenta pegar só a parte útil após vírgula ou ponto
    const partes = f.split(/[.,]\s+/);
    const util = partes.find(p => p.length > 30 && !/^(e aí|boa noite|então|tudo bem)/i.test(p));
    if (util) f = util;
  }
  // Garante que termina com pontuação
  if (f.length > 0 && !/[.!?"]$/.test(f)) f += ".";
  return f;
}

const wb = XLSX.readFile(EXCEL);
const sheet = wb.Sheets["Banco de Depoimentos"];
// Cols: 0=Categoria, 1=Nome, 2=Cidade, 3=Problemas, 4=Medicamentos,
//       5=Tempo p/ Resultado, 6=Credibilidade, 7=Frase de Destaque,
//       8=Arquivo Original, 9=Arquivo Novo, 10=YouTube, 11=Link Drive
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }).slice(1);

const depoimentos = [];
let id = 1;
let semCategoria = 0;

for (const row of rows) {
  const catRaw = (row[0] || "").toString().trim();
  const nome = (row[1] || "Não identificado").toString().trim();
  const cidade = (row[2] || "").toString().replace("Não informado", "").trim();
  const tempoResultado = (row[5] || "").toString().trim();
  const fraseRaw = (row[7] || "").toString().trim();
  const driveId = extractDriveId(row[11]);

  const cat = categoriaMap[catRaw];
  if (!cat) {
    semCategoria++;
    console.warn(`⚠️  Categoria não mapeada: "${catRaw}" (linha ${id + 1})`);
    continue;
  }

  depoimentos.push({
    id: String(id++),
    nome,
    cidade,
    condicao: cat.condicao,
    condicaoLabel: cat.label,
    frase: limpezaFrase(fraseRaw),
    tempoResultado,
    driveId,
  });
}

writeFileSync(OUTPUT, JSON.stringify(depoimentos, null, 2), "utf-8");

const comVideo = depoimentos.filter((d) => d.driveId).length;
console.log(`✅ ${depoimentos.length} depoimentos gerados (${semCategoria} ignorados por categoria não mapeada).`);
console.log(`🎥 ${comVideo} com vídeo do Drive.`);
console.log(`📄 Saída: ${OUTPUT}`);
