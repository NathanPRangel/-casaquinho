Levo um casaquinho?
Visão Geral
Aplicação (front-end) web onde, a partir do nome de uma cidade, serão exibidas as informações do clima, tais como: temperatura atual, máxima, mínima e a previsão para os próximos dias.

Deploy
Link: https://levo-casaquinho-tan.vercel.app/

Principais Funcionalidades
Monstrar temperatura atual, máxima, mínima e a previsão para os próximos dias de acordo com o nome da cidade digitada no campo de pesquisa. Por padrão, todas as unidades devem ser exibidas em °C (Celsius).

Para entidades foram usados duas rotas:

Para obter os dois conjuntos de dados (temperatura atual e previsão dos próximos dias).

GET /weather 
GET /forecast
A cor do texto onde a temperatura é exibida é orientada pela seguinte regra…

- Clear: “Céu aberto” (laranja)
- Clouds: “Nublado” (cinza)
- Rain: “Chovendo” (azul)
- Snow: “Nevando” (cinza claro)
- Thunderstorm: “Tempestade” (roxo)
- Drizzle: “Chuviscando” (azul claro)
- Mist: “Neblina” (cinza claro)

Tecnologias Utilizadas
Linguagem de Programação: JavaScript;
Frameworks ou Bibliotecas: React, Styled Components e Recharts;
Ferramenta Utilizada: Vercel, Git e GitHub, API OpenWeatherMap e Visual Estudio Code.