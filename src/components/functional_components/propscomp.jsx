function NavigationBar(){
    return(
        <><div class="w3-bar w3-black">
          <nav>
           <ul>
  <li><a onclick="showContent('About me')">About me</a></li>
  <li><a onclick="showContent('Education')">Education</a></li>
  <li><a onclick="showContent('Projects')">Projects</a></li>
  <li><a onclick="showContent('Skills')">Skills</a></li>
</ul>
</nav>

      </div></>


    )
}export default NavigationBar