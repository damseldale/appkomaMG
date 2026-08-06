# appkomaMG
# 🎬 Animaker Clone

Platform pembuatan video animasi dan editor berbasis *cloud* yang terinspirasi dari Animaker. Dibangun dengan arsitektur **Microservices** dan **Monorepo**, mendukung kolaborasi real-time, manajemen aset, Text-to-Speech (TTS) dengan sinkronisasi bibir (*lip-sync*), serta mesin *rendering* video berbasis **FFmpeg**.

---

## 🛠️ Tech Stack & Architecture

Proyek ini menggunakan struktur monorepo dengan teknologi modern di setiap lapisannya:

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS (`@animaker/ui-system`)
*   **API Gateway:** Node.js, Express, JWT Authentication, Rate Limiting
*   **Backend Microservices:**
    *   **`service-users`**: NestJS, PostgreSQL, Stripe Billing, Passport JWT
    *   **`service-projects`**: NestJS, Mongoose / MongoDB (manajemen scene & template)
    *   **`service-assets`**: NestJS, AWS S3 Uploader, Prop & Character Library
    *   **`service-tts-lipsync`**: Python, FastAPI, TTS Generator, Waveform & Viseme Analyzer
    *   **`service-render-engine`**: NestJS, FFmpeg Wrapper, Video Encoder, S3 Result Uploader
*   **Shared Packages:**
    *   `@animaker/shared-types`: Kontrak tipe data TypeScript universal
    *   `@animaker/ui-system`: Komponen UI desain sistem terpusat
    *   `@animaker/logger`: Modul pencatatan log terstruktur
*   **Infrastructure & DevOps:**
    *   **Docker & Docker Compose** (Kontainerisasi layanan & FFmpeg)
    *   **Kubernetes (K8s)** (Deployment & Ingress Controller)
    *   **Terraform** (Provisioning infrastruktur AWS S3, RDS PostgreSQL, & EKS)

---

## 📂 Project Directory Structure

```text
animaker-clone/
├── apps/
│   ├── api-gateway/           # Titik masuk utama API & Reverse Proxy (Express)
│   ├── service-users/         # Layanan autentikasi, manajemen user, & billing Stripe (NestJS)
│   ├── service-projects/      # Layanan manajemen proyek animasi & template (NestJS)
│   ├── service-assets/        # Layanan unggah S3, perpustakaan prop & karakter (NestJS)
│   ├── service-tts-lipsync/   # Layanan sintesis suara & analisis viseme bibir (Python/FastAPI)
│   └── service-render-engine/ # Layanan rendering video latar belakang menggunakan FFmpeg (NestJS)
├── packages/
│   ├── shared-types/          # Definisi TypeScript bersama (Project, Canvas, API types)
│   ├── ui-system/             # Komponen desain sistem React reusable (Buttons, Inputs, Icons)
│   └── logger/                # Utilitas sistem pencatatan log (*logger*) terpusat
└── infra/
    ├── k8s/                   # Konfigurasi Kubernetes Manifests & Ingress
    └── terraform/             # Infrastruktur Cloud AWS (S3, RDS, EKS)
