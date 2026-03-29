#!/usr/bin/env node
/**
 * Script: process-depoimentos.js
 * Lê os 206 arquivos .txt de Depoimentos/depoimentos_renomeados/
 * e gera src/data/depoimentos.json
 *
 * Uso: node scripts/process-depoimentos.js
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_DIR = resolve(__dirname, "../../Depoimentos/depoimentos_renomeados");
const OUTPUT = resolve(__dirname, "../src/data/depoimentos.json");

// Mapeamento de nomes de pasta → label legível
const categoriaLabels = {
  Acido_Urico: "Ácido Úrico",
  Alergia: "Alergia",
  Ansiedade: "Ansiedade",
  Arritmia_Cardiaca: "Arritmia Cardíaca",
  Artrite_Artrose: "Artrite / Artrose",
  Asma_Bronquite: "Asma / Bronquite",
  Cancer: "Câncer",
  Cefaleia: "Cefaleia",
  Cicatrizacao: "Cicatrização",
  Circulacao: "Circulação",
  Colesterol: "Colesterol",
  Convulsao: "Convulsão",
  Cordas_Vocais: "Cordas Vocais",
  Correcao_de_Taxas: "Correção de Taxas",
  Depressao: "Depressão",
  Derrame: "Derrame",
  Diabetes: "Diabetes",
  Doenca_de_Crohn: "Doença de Crohn",
  Doencas_de_Pele: "Doenças de Pele",
  Dor_no_Corpo: "Dor no Corpo",
  Enxaqueca: "Enxaqueca",
  Esteatose_Hepatica: "Esteatose Hepática",
  Estresse: "Estresse",
  Fibromialgia: "Fibromialgia",
  Gastrite: "Gastrite",
  Hernia_de_Disco: "Hérnia de Disco",
  Inchaco: "Inchaço",
  Incontinencia_Urinaria: "Incontinência Urinária",
  Insonia: "Insônia",
  Intestino_Preso: "Intestino Preso",
  Intolerancia_Lactose: "Intolerância à Lactose",
  Labirintite: "Labirintite",
  Lupus: "Lúpus",
  Mal_de_Parkinson: "Mal de Parkinson",
  Menopausa: "Menopausa",
  Mioma_Uterino: "Mioma Uterino",
  Obesidade: "Obesidade",
  Osteoporose: "Osteoporose",
  Outras_Doencas: "Outras Doenças",
  Pedra_da_Vesicula: "Pedra na Vesícula",
  Problema_de_Pressao: "Pressão Arterial",
  Problema_Pulmonar: "Problema Pulmonar",
  Problema_Renal: "Problema Renal",
  Problemas_Ortopedicos: "Problemas Ortopédicos",
  Psoriase: "Psoríase",
  Queda_de_Cabelo: "Queda de Cabelo",
  Reumatismo: "Reumatismo",
  Sequelas_de_Acidente: "Sequelas de Acidente",
  Sinusite: "Sinusite",
  Tireoide: "Tireoide",
  TPM: "TPM",
  Trombose: "Trombose",
  Ulcera_Varicosa: "Úlcera Varicosa",
  Vitiligo: "Vitiligo",
};

function parseTxt(filePath, condicao) {
  const raw = readFileSync(filePath, "utf-8");
  const lines = raw.split("\n");

  let pessoa = "";
  let cidade = "";
  let textoStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("Pessoa:")) pessoa = line.replace("Pessoa:", "").trim();
    if (line.startsWith("Cidade:")) cidade = line.replace("Cidade:", "").trim();
    if (line.startsWith("---")) {
      textoStart = i + 1;
      break;
    }
  }

  const texto = lines.slice(textoStart).join("\n").trim();

  return {
    nome: pessoa || "Anônimo",
    cidade: cidade || "",
    condicao,
    condicaoLabel: categoriaLabels[condicao] || condicao.replace(/_/g, " "),
    texto,
  };
}

const categorias = readdirSync(BASE_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const depoimentos = [];
let id = 1;

for (const cat of categorias) {
  const catDir = join(BASE_DIR, cat);
  const files = readdirSync(catDir).filter((f) => f.endsWith(".txt"));

  for (const file of files) {
    const entry = parseTxt(join(catDir, file), cat);
    depoimentos.push({ id: String(id++), ...entry });
  }
}

writeFileSync(OUTPUT, JSON.stringify(depoimentos, null, 2), "utf-8");

console.log(`✅ Processados ${depoimentos.length} depoimentos em ${categorias.length} categorias.`);
console.log(`📄 Arquivo gerado: ${OUTPUT}`);
