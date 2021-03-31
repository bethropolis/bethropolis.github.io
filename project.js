$.get("https://api.github.com/users/bethropolis/repos", function(data) {
    console.log(data);
    data.forEach(res=>{
        function desc(str) {
            if (str == null) {
                return "no description";
            } else if (str.length > 80) {
                return str.substring(0, 80) + "...";
            } else {
                return str;
            }
        }
        $('.header-text').hide();
        $(".main").append(render(res, desc(res.description)));
    }
    );
});

function render(data, desc) {
    return `<div class="card">
          <a href="${data.html_url}" id="github_page" class="gh_page" target="_blank">${data.name}</a><br>
         <div class="line"></div> 
         <div class="description" id="des">${desc}</div>  
         </div>`;
}
$('.switch').click(function() {
    alert('sorry light mode is currently not available here')
})
