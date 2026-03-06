# Esquema de Banco de Dados Previsível (Supabase)

## Tabela: leads
- `id`: uuid (PK)
- `name`: text
- `email`: text
- `phone`: text (whatsapp)
- `interest`: enum ('mentorship', 'challenge')
- `created_at`: timestamp
