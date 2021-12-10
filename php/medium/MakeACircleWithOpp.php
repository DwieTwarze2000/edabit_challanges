<!-- Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
 The circles constructed must have two getters getArea() (PI*r^2) and getPerimeter() (2*PI*r) 
 which give both respective areas and perimeter (circumference). -->
<?php
class Circle {
  public function __construct($r){
		$this->r = $r;
	}
	public function getArea(){
		return $this->r * $this->r * pi();
	}
	public function getPerimeter(){
		return $this->r * pi() * 2;
	}
}
?>