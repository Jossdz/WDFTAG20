module.exports = (username, email, id) => `
  <h1>Activa tu cuenta</h1>
  <p>Bienvenido a la app mas prrona de todo internet</p>
  <p>Verifica tu cuenta <a href="${process.env.PROJECT_URL}/activate/${id}">aca</a></p>
  `
