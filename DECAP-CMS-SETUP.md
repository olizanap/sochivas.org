# Decap CMS — Panel de contenido para SOCHIVAS

Panel web para que el directorio edite noticias, webinars, información para pacientes, etc., **sin tocar código**.

- **URL del panel**: https://sochivas.org/admin
- **Login**: con cuenta GitHub (los editores deben tener acceso al repo `olizanap/sochivas.org`)
- **Cómo funciona**: cada edición se guarda como un commit en GitHub → Railway redespliega → cambios visibles en ~2 minutos.

---

## Estado del setup

- [x] Archivos del CMS creados (`public/admin/index.html`, `public/admin/config.yml`)
- [x] Carpeta de media creada (`public/images/uploads/`)
- [x] Página "Convención" agregada como contenido editable (`src/content/convencion.md`)
- [ ] **Pendiente — paso humano**: crear OAuth App en GitHub
- [ ] **Pendiente — paso humano**: deployar el OAuth Proxy en Railway
- [ ] **Pendiente — paso humano**: agregar editores al repo

---

## PASO 1 — Crear OAuth App en GitHub (5 min)

Una OAuth App permite que Decap CMS pida login a GitHub.

1. Ir a https://github.com/settings/developers → **New OAuth App**
2. Llenar:
   - **Application name**: `SOCHIVAS CMS`
   - **Homepage URL**: `https://sochivas.org`
   - **Authorization callback URL**: `https://sochivas-cms-oauth.up.railway.app/callback`
     *(este dominio aún no existe, lo crearás en el paso 2; por ahora pon el valor tal cual y luego se actualiza si cambia)*
3. **Register application**
4. En la pantalla siguiente:
   - Anotar el **Client ID**
   - Hacer click en **Generate a new client secret** y anotar el **Client Secret** (solo se muestra una vez)

Guarda esos dos valores, los necesitas en el paso 2.

---

## PASO 2 — Deployar OAuth Proxy en Railway (10 min)

Decap CMS no puede hablar directo con GitHub OAuth desde el navegador (CORS). Necesita un microservicio intermediario. Es un repo público open source, no escribimos código.

1. Ir a Railway → **+ New** → **Deploy from GitHub repo**
2. Repo a deployar: `https://github.com/vencax/netlify-cms-github-oauth-provider`
   - (Si Railway pide acceso al repo, fork primero a tu cuenta y luego conectarlo)
3. Una vez creado el servicio, ir a **Variables** y agregar:
   ```
   OAUTH_CLIENT_ID       = (Client ID del paso 1)
   OAUTH_CLIENT_SECRET   = (Client Secret del paso 1)
   ORIGIN                = https://sochivas.org
   REDIRECT_URL          = https://sochivas.org/admin/
   ```
4. En **Settings** → **Networking** → **Generate Domain** (Railway te da uno tipo `sochivas-cms-oauth-production-XXXX.up.railway.app`)
5. **Importante**: copiar ese dominio generado y:
   - **Actualizar** el callback en GitHub OAuth App: `https://<dominio-generado>/callback`
   - **Actualizar** `public/admin/config.yml` línea `base_url:` con ese dominio (o configurar dominio custom `cms.sochivas.org` apuntando a Railway)

---

## PASO 3 — Agregar editores al repo (5 min por editor)

Solo personas con acceso al repo `olizanap/sochivas.org` pueden entrar al CMS.

Para cada miembro del directorio que vaya a editar:

1. Pedirles que creen cuenta en https://github.com (si no tienen)
2. En GitHub → repo `sochivas.org` → **Settings** → **Collaborators** → **Add people**
3. Buscar por usuario o email → **Add** con permiso **Write**
4. El editor recibe email, lo acepta
5. Ya puede entrar a https://sochivas.org/admin con su cuenta GitHub

**Recomendación**: crear un GitHub Team `sochivas-editores` para gestionar permisos en grupo.

---

## PASO 4 — Probar que funciona

1. Abre https://sochivas.org/admin
2. Click en **Login with GitHub** → autoriza
3. Deberías ver el panel con las colecciones: Noticias, Pacientes, Webinars, Páginas
4. Click en **Noticias** → **+ Nueva noticia**
5. Llena el formulario, click **Publicar** (o **Guardar borrador** si tienes editorial workflow activo)
6. Espera ~2 min y verifica que aparece en https://sochivas.org/noticias

---

## Estructura del CMS

| Colección | Contenido | Tipo |
|---|---|---|
| **Noticias** | Posts del home/sección noticias | Múltiple (carpeta) |
| **Información Pacientes** | Artículos médicos divulgativos | Múltiple (carpeta) |
| **Webinars / Journal Club** | Sesiones mensuales | Múltiple (carpeta) |
| **La Sociedad** | Página "Quiénes somos" | Página única |
| **Directorio** | Listado del directorio actual | Página única |
| **Convención Anual** | Datos de la convención vigente | Página única |

---

## Para administradores técnicos

### Ubicación de archivos
- Config CMS: `public/admin/config.yml`
- Entry point: `public/admin/index.html`
- Contenido editable: `src/content/**/*.md`
- Media subido vía CMS: `public/images/uploads/`

### Editorial Workflow activo
El CMS está en modo `editorial_workflow`: las ediciones pasan por **Borrador → En revisión → Listo → Publicado**. Si quieres que las publicaciones sean inmediatas (sin revisión), elimina la línea `publish_mode: editorial_workflow` en `config.yml`.

### Costo
- **CMS Decap**: $0 (corre en el navegador del editor)
- **OAuth Proxy en Railway**: ~$1-2/mes (es un servicio Node minúsculo, ~50 MB RAM)
- **Hosting Next.js (sochivas.org)**: sin cambios

### Mantenimiento
- El CMS Decap se actualiza solo (cargado vía CDN de unpkg en `index.html`)
- Si hay cambios en la estructura del contenido (nuevos campos en frontmatter), actualizar `public/admin/config.yml`

### Troubleshooting
- **"Failed to load config"** → revisar sintaxis YAML en `config.yml`
- **"Authentication error"** → revisar Client ID/Secret en Railway y callback URL en GitHub
- **Publicar no aparece en el sitio** → revisar logs de Railway del Next.js (debería redeployarse al detectar el push)
