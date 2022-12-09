exports.getDate = () => {
    let data = new Date()
    let dia= data.getDate().toString()
    let diaF = (dia.length == 1) ? '0'+dia : dia
    let mes = (data.getMonth()+1).toString() 
    let mesF = (mes.length == 1) ? '0'+mes : mes
    let anoF = data.getFullYear();
    return anoF+"-"+mesF+"-"+diaF;
}

exports.getDateSevenDaysAgo = () => {
    let data = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    let dia= data.getDate().toString()
    let diaF = (dia.length == 1) ? '0'+dia : dia
    let mes = (data.getMonth()+1).toString() 
    let mesF = (mes.length == 1) ? '0'+mes : mes
    let anoF = data.getFullYear();
    return anoF+"-"+mesF+"-"+diaF;       
}

exports.getTime = () => {
    let now = new Date(); 
    let year = now.getFullYear();
    let month = now.getMonth()+1; 
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds(); 
    
    if(month.toString().length == 1) {
            month = '0'+month;
    }
    if(day.toString().length == 1) {
            day = '0'+day;
    }   
    if(hour.toString().length == 1) {
            hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
            minute = '0'+minute;
    }
    
    if(second.toString().length == 1) {
            second = '0'+second;
    }   
    let dateTime = hour+':'+minute+':'+second;   
        return dateTime;
}

