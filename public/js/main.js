function showCurrentInfo(){

    var day=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month =["Jan","Feb","Mar","Apr","May",
    "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var date=new Date();
    var d=date.getDay();
    var cdate=date.getDate();
    var cmonth=date.getMonth();
    return [day[d],cdate,month[cmonth]];
    
}
const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const day=document.getElementById('day');
const today_data=document.getElementById('today_data');
const cInfo=showCurrentInfo();
        day.innerText=cInfo[0];
        today_data.innerText=cInfo[1]+" "+cInfo[2];
const getInfo=async (event)=>{
    event.preventDefault();
    let city_val=cityName.value;
    console
    if(city_val===""){
        city_name.innerText="Please enter name of a city";
    }
    else{
        console.log(city_val);
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=a4b0321adf0c391dc20386fd6c0e74cb`;  
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        temp.innerHTML=arrData[0].main.temp+"&deg; C";
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}` ;
        const tempMood=arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        if(tempMood=="Clear"){
            temp_status.innerHTML=`<i class="fas fa-sun" style="color:#eccc68;"></i>`;
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML=`<i class="fas fa-cloud" style="color:#f1f2f6;"></i>`;
        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML=`<i class="fas fa-rain" style="color:#a4a0be;"></i>`;
        }
        else{
            temp_status.innerHTML=`<i class="fas fa-cloud" style="color:#f1f2f6;"></i>`;
        }
    }
    catch{
    console.error(err);
    }
    }
};
submitBtn.addEventListener("click",getInfo);