<?php 
namespace application\controllers;
use application\core\Controller;
use application\core\MilavApi;

class MainController extends Controller
{  private $api;
	public function indexAction()
	{ 
		$this->api = new MilavApi;
		$this->api->getBasic();
	 $this->view->render('index');
	}
		
}

?>