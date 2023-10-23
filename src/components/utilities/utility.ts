import { zurgiinTogtmol } from './togtmol'

export const isNullOrUndefined = (utga:any) => {
    return utga == undefined || utga == null
}

export const omdbApiCall = (id:string) => {
    return new Promise(resolve => {
        kinoMedeelelAvya(id, resolve)
    })
}

async function kinoMedeelelAvya(id:string, resolve:Function) {
    await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.OMDB_API}`).then(result => {
        result.json().then(movie => {
            return resolve(movie)
        })
    })
}

export const trailerApiCall = (id:string) => {
    return new Promise(resolve => {
        trailerAvya(id, resolve)
    })
}

async function trailerAvya(id:string, resolve:Function) {
    // await fetch(`https://imdb-api.com/en/API/Trailer/k_12345678/${id}`).then(result => {
    //     result.json().then(trailer => {
    //         return resolve(trailer)
    //     })
    // })
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a668d773bfmshc5088b6eaffe219p1d8d5fjsn423c3f227353',
            'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://mdblist.p.rapidapi.com/?i=${id}`, options);
        const result = await response.text();
        resolve(result)
    } catch (error) {
        console.error(error);
    }
}

export const defaultZurgiinKhemjeegeerHeightBodyo = (urt:number) => {
    const zurgiinRatio = zurgiinTogtmol.WIDTH / zurgiinTogtmol.HEIGHT
    return urt / zurgiinRatio
}

export const zurgiinMedeelel = (url:any, callback:Function) => {
    const img = new Image()
    img.onload = () => callback(null, img)
    img.onerror = (err) => callback(err)
    img.src = url;
}

export const eventDisabler = (e:any) => {
    e.preventDefault();
    e.stopPropagation()
}

export const youtubeIdSalgay = (url:string) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

export const clone = (utga:any[] | object) => {
    return JSON.parse(JSON.stringify(utga))
}