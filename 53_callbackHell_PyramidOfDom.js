
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src=src;
    script.onload=function(){
        console.log('script loaded=>',script);
        callback(src,null);
    }

    //error handling
    script.onerror=function(){
        console.log('script is not valid =>'+ src);
        callback(src,new Error('Script is not valid ')+src);
    }

    document.body.appendChild(script);

}

// callback hell and pyramid of doom
//it becomes more nested and code becomes deeper
//callback inside another callback
//all callbacks are asyncs in action

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',function hello(src,error){
    if(error){
        console.log(error);
        return;
    }
    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', function hello(src,error){
         if(error){
        console.log(error);
        return;
    }
     loadScript('https://cdn.jsdelivr.net/npm/bootstrap1@5.0.2/dist/js/bootstrap.bundle.min.js', function hello(src,error){
         if(error){
        console.log(error);
        return;
    }
     loadScript('https://cdn.jsdelivr.net/npm/bootstrap2@5.0.2/dist/js/bootstrap.bundle.min.js', function hello(src,error){
         if(error){
        console.log(error);
        return;
    }
     loadScript('https://cdn.jsdelivr.net/npm/bootstrap3@5.0.2/dist/js/bootstrap.bundle.min.js', function hello(src,error){
         if(error){
        console.log(error);
        return;
    }
     loadScript('https://cdn.jsdelivr.net/npm/bootstrap4@5.0.2/dist/js/bootstrap.bundle.min.js', function hello(src,error){
         if(error){
        console.log(error);
        return;
    }
    
    });
    });
    });
    });
    });
});