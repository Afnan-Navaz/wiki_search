
document.getElementById('go').addEventListener('click', function(e){
        let search = document.getElementById('search').value;
        search = search.trim();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`, true);
        xhr.onload = function(){
            let outp = '';
            if(this.status == 200){
                data = JSON.parse(this.responseText);
                data.query.search.forEach(function(x){
                    let url = encodeURI(`https://en.wikipedia.org/wiki/${x.title}`);
                    outp += `<a href=${url}>
                            <div class="cox">
                            <h2>${x.title}</h2>
                            <span class="cont">${x.snippet}</span>
                            </div>
                            </a>`;
                })
                document.getElementById('content').innerHTML = outp;
            }
        }
        xhr.send();
        document.getElementById('search').value = '';
        e.preventDefault();
})
document.getElementById('search').addEventListener('click', function(){
    document.getElementById('search').value = '';
});