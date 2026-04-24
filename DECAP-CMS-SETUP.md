# Decap CMS — Panel de contenido para SOCHIVAS

Panel web para que el directorio edite noticias, webinars, información para pacientes, etc., **sin tocar código**.

- **URL del panel**: https://sochivas.org/admin/ (también funciona en https://www.sochivas.org/admin/)
- **Login**: con cuenta GitHub (los editores deben tener acceso al repo `olizanap/sochivas.org`)
- **Cómo funciona**: cada edición se guarda como un commit en GitHub → Railway redespliega → cambios visibles en ~2 minutos.

---

## Estado del setup ✅ OPERATIVO

- [x] Archivos del CMS creados (`public/admin/index.html`, `public/admin/config.yml`)
- [x] Carpeta de media creada (`public/images/uploads/`)
- [x] Páginas únicas como contenido editable (`src/content/sociedad.md`, `directorio.md`, `convencion.md`)
- [x] OAuth App creada en GitHub (**SOCHIVAS CMS**)
- [x] OAuth Proxy deployado en Railway
- [x] `config.yml` apuntando al proxy real
- [x] `<base href="/admin/">` agregado para resolver bug de URL relativa
- [x] Login con GitHub probado y funcionando
- [ ] **Pendiente — paso humano**: agregar editores al repo (PASO 3 más abajo)

---

## Infraestructura desplegada

| Componente | URL / Identificador |
|---|---|
| Sitio Next.js | https://sochivas.org (Railway: `sochivasorg-sochivasorg.up.railway.app`) |
| Panel CMS | https://sochivas.org/admin/ |
| OAuth Proxy en Railway | https://netlify-cms-github-oauth-provider-sochivasorg.up.railway.app |
| GitHub OAuth App | "SOCHIVAS CMS" en https://github.com/settings/developers |
| Repo de contenido | https://github.com/olizanap/sochivas.org |

### Variables de entorno del OAuth Proxy (Railway)

```
NODE_ENV=production
ORIGINS=sochivas.org,www.sochivas.org,sochivasorg-sochivasorg.up.railway.app
OAUTH_CLIENT_ID=<Client ID del OAuth App de GitHub>
OAUTH_CLIENT_SECRET=<Client Secret del OAuth App de GitHub>
```

> ⚠️ Si en el futuro se agrega un nuevo dominio (ej. `cms.sochivas.org`), hay que sumarlo a `ORIGINS` separado por coma sin espacios, o el login falla con "Invalid origin".

### Authorization Callback URL en GitHub OAuth App

```
https://netlify-cms-github-oauth-provider-sochivasorg.up.railway.app/callback
```

---

## PASO 3 — Agregar editores al repo (5 min por editor)

Solo personas con acceso al repo `olizanap/sochivas.org` pueden entrar al CMS. Para cada miembro del directorio que vaya a editar:

1. Pedirles que creen cuenta en https://github.com (si no tienen)
2. En GitHub → repo `sochivas.org` → **Settings** → **Collaborators** → **Add people**
3. Buscar por usuario o email → **Add** con permiso **Write**
4. El editor recibe email, lo acepta
5. Ya puede entrar a https://sochivas.org/admin/ con su cuenta GitHub

**Recomendación**: crear un GitHub Team `sochivas-editores` para gestionar permisos en grupo en lugar de uno por uno.

---

## Cómo se usa el panel (para editores)

1. Ir a https://sochivas.org/admin/
2. Click **Iniciar sesión con GitHub** → autorizar
3. En la barra izquierda elegir la colección a editar:
   - **Noticias** → posts del home/sección noticias
   - **Información Pacientes** → artículos médicos divulgativos
   - **Webinars / Journal Club** → sesiones mensuales
   - **Páginas Institucionales** → La Sociedad, Directorio, Convención Anual
4. Para crear: botón **Nuevo …** arriba a la derecha. Para editar: click en la entrada existente.
5. Llenar el formulario y click **Guardar** → queda como **Borrador** (Editorial Workflow activo).
6. En la pestaña **Flujo Editorial** mover la entrada por: **Borrador → En revisión → Listo → Publicado**.
7. Al publicar, se hace commit en GitHub → Railway re-deploya el sitio en ~2 min → cambios visibles.

---

## Para administradores técnicos

### Ubicación de archivos
- Config CMS: `public/admin/config.yml`
- Entry point: `public/admin/index.html`
- Contenido editable: `src/content/**/*.md`
- Media subido vía CMS: `public/images/uploads/`

### Editorial Workflow
El CMS está en modo `editorial_workflow`. Si se quiere que las publicaciones sean inmediatas (sin pasar por revisión), eliminar la línea `publish_mode: editorial_workflow` en `config.yml`.

### Costo aproximado
- **CMS Decap**: $0 (corre en el navegador del editor)
- **OAuth Proxy en Railway**: ~$1-2/mes (servicio Node minúsculo, ~50 MB RAM)
- **Hosting Next.js (sochivas.org)**: sin cambios

### Mantenimiento
- El CMS Decap se autoactualiza (cargado vía CDN de unpkg en `index.html`)
- Si hay cambios en la estructura del contenido (nuevos campos en frontmatter), actualizar `public/admin/config.yml`
- Si se cambia el dominio del sitio o del proxy, actualizar `ORIGINS` y la callback URL del OAuth App de GitHub

### Troubleshooting

| Síntoma | Causa probable | Fix |
|---|---|---|
| `Failed to load config.yml (404)` | Caché del browser de versión anterior, o `<base href>` faltante en index.html | Hard refresh (Ctrl+F5) o ventana incógnita |
| El popup de login no se cierra después de autorizar GitHub | El origen del sitio no está en la variable `ORIGINS` del proxy en Railway | Agregar el origen exacto (ej. `www.sochivas.org`) a `ORIGINS` separado por coma sin espacios |
| `redirect_uri_mismatch` al hacer login | La Authorization callback URL del OAuth App de GitHub no coincide con la URL real del proxy | Editar el OAuth App en https://github.com/settings/developers y poner `https://<dominio-proxy>/callback` |
| `process.env.ORIGINS MUST be comma separated list` en logs del proxy | `ORIGINS` con `https://`, espacios, o barras finales | Solo hostnames puros separados por coma: `sochivas.org,www.sochivas.org` |
| Publicar no aparece en el sitio | Railway aún re-deployando, o el push no llegó | Revisar logs del Next.js en Railway (debería redeployar al detectar push en `main`) |

### Cómo se hace una rotación del Client Secret
Si hay sospecha de que el Client Secret se filtró:
1. En https://github.com/settings/developers → **SOCHIVAS CMS** → sección **Client secrets** → revocar el actual
2. **Generate a new client secret** → copiar el nuevo
3. En Railway → servicio del OAuth Proxy → **Variables** → reemplazar `OAUTH_CLIENT_SECRET` por el nuevo
4. Railway re-deploya solo en ~30 seg
