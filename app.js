const express = require ('express');
const axios = require ('axios');
const path = require ('path');
const cors = require ('cors');
const config = require('/config.json/');
const apikey = config.apikey;

const app = express();
app.listen(3000);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const traducaoClima = {
    "few clouds": "Poucas nuvens",
    "scattered clouds": "Nuvens dispersas"
}

app.get('/climatempo/cidade', async (req, res) => {
    const city = req.parametro.cidade;

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
            if(response.status === 200){

                const clima = traducaoClima[response.data.weatcher[0].description] || response.data.weatcher[0].description;

                const weatcher = {
                    temperatura: response.data.main.temp,
                    umidade: response.data.main.humidity,
                    velocidadeDoVento: response.data.wind.spead,
                    clima: clima
                };

                res.send(weatherData);
        } else {
                res.status(response.status).send({erro: 'Erro ao obter dados metereológicos'})
        }

    } catch (error) {
        res.status(500).send({erro:'Erro ao obter dados metereológicos', error });
    }
})