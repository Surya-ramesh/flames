function execute() {
    const name1 = document.getElementById("name1")

    const name2 = document.getElementById("name2");

    const calculate = document.getElementById("calci");

    calculate.addEventListener("click",getResult);
    function getResult() {
        var str1 = name1.value.split("").sort().join("").toLowerCase().split(" ").join("");
        var str2 = name2.value.split("").sort().join("").toLowerCase().split(" ").join("");
        var x=str1.length, y=str2.length;
        console.log(str1);
        console.log(str2);
        if(x==0&&y==0) 
        {
            alert("Both the boxes are empty, enter names you like");
            return;
        }
        else if(x==0) 
        {
            alert("First box is empty, enter any name");
            return;
        }
        else if(y==0)
        {
            alert("Second box is empty, enter any name");
            return;
        }
        else if(str1===str2)
        {
            alert("Cannot give same name, try again");
            return;
        }
        var i,j;
        for(i=0;i<str1.length;i++)
        {
            for(j=0;j<str2.length;j++)
            {
                if(str1[i]==str2[j])
                {
                    str1=str1.substring(0,i)+str1.substring(i+1);
                    str2=str2.substring(0,j)+str2.substring(j+1);
                    i--;
                }
            }
        }
        var str=str1+str2;
        console.log(str);
        var len=str.length,count=0,flames=["friends","lovers","affection","marriage","enemy","sister"];
        for(i=0;flames.length!=1;i++)
        {
            count++;
            if(count==len)
            {
                flames.splice(i, 1);
                count=0;
                i--;
            }
            if(i==flames.length-1)
            {
                i=-1;
            }
        }
        console.log(flames[0]);
        window.location.href = "./"+flames[0]+".html";
    }
}


function leave() {
    setTimeout(function() {
        window.location.href="./index.html";
    },5000);
}