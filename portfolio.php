<?php
$id = $_GET[pid];
if($id=="p1") {
  echo "<object type='application/pdf' data='http://192.168.219.163:8080/portfolio/img/portfolio1.pdf' width='100%' height='800'>
  <param name='src' value='portfolio1.pdf'>
  </object>";
}
else if($id=="p2") {
  echo "<object type='application/pdf' data='http://192.168.219.163:8080/portfolio/img/portfolio2.pdf' width='100%' height='800'>
  <param name='src' value='portfolio2.pdf'>
  </object>";
}
else if($id=="p3"){
  echo "<object type='application/pdf' data='http://192.168.219.163:8080/portfolio/img/portfolio3.pdf' width='100%' height='800'>
  <param name='src' value='portfolio3.pdf'>
  </object>";
}
?>
