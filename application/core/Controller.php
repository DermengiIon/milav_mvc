<?php 
namespace application\core;
use application\core\View;

abstract class Controller 
{ public $route;
	public $view;
	public $acl;
	public function __construct($route)
	{
		$this->route=$route;
	if(!$this->checkAcl()){

		header('location: /login');
	}
		$this->view= new View($route);
		$this->model=$this->loadModel($route['controller']);

	}
	public function loadModel($nameModel){
		$path='application\models\\'.ucfirst($nameModel);
		if(class_exists($path)){
			return new $path;
		}
	}
	public function checkAcl(){
		$this->acl=require 'application/acl/'.$this->route['controller'].'.php';
		if($this->isAcl('all')){
			return true;
		}
		elseif(isset($_SESSION['user']) && $this->isAcl('authorize')){
			return true;
		}
		else{
			return false;
		}

	}
	public function isAcl($key){
		return in_array($this->route['action'], $this->acl[$key]);
	}
}

?>