const updateTime= () => {
    let d=new Date();
    us.innerHTML= d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      }).split(", ")[1];
    
      india.innerHTML= d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
      }).split(", ")[1];
    
      china.innerHTML= d.toLocaleString('en-US', {
        timeZone: 'Asia/Shanghai',
      }).split(", ")[1];

      let alarmHour= alarm.value.split(":")[0];  
      let alarmMinute= alarm.value.split(":")[1];
      if (d.getHours()==alarmHour && d.getMinutes()==alarmMinute) {
      
        let audioURL="mixkit-alert-alarm-1005.wav";
        var audio = new Audio(audioURL);
       audio.play();
      }
}
setInterval(updateTime, 1000);