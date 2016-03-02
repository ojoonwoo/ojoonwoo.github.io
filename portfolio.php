<?php
$id = $_GET[pid];
if($id=="p1") {
  echo "<object type='application/pdf' data='https://ojoonwoo.github.io/img/portfolio1.pdf' width='100%' height='800'>
  <param name='src' value='portfolio1.pdf'>
  </object>";
}
else if($id=="p2") {
  echo "<object type='application/pdf' data='https://ojoonwoo.github.io/img/portfolio2.pdf' width='100%' height='800'>
  <param name='src' value='portfolio2.pdf'>
  </object>";
}
else if($id=="p3"){
  echo "<object type='application/pdf' data='https://ojoonwoo.github.io/img/portfolio3.pdf' width='100%' height='800'>
  <param name='src' value='portfolio3.pdf'>
  </object>";
}
?>
