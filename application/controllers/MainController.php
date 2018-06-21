<?php 
namespace application\controllers;
use application\core\Controller;
use application\core\MilavApi;

class MainController extends Controller
{   private $api;

	public function indexAction()
	{ 
		$this->api = new MilavApi;
		$basic = $this->api->getBasic();
		$start = $this->api->getStart();
		$business = $this->api->getBusiness();
		$profesional = $this->api->getProfesional();
		$corporate = $this->api->getCorporate();
		$vars=[
			'basic' =>$basic,
            'start' =>$start,
            'business'=>$business,
            'profesional'=>$profesional,
            'corporate'=>$corporate
		];

	 $this->view->render('index',$vars);
	}
	 
	 public function contactAction(){
        $Err = '';

	 	if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if(isset($_POST)){
				$name = $_POST['name'];
				$email = $_POST['email'];
				$message = $_POST['message'];

				if (empty($name)) {
					$Err = "Name is required";
				} else {
					if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
						$Err = "Only letters and white space allowed"; 
					}
				}

				if (empty($email)) {
					$Err = "Email is required";
				} else {
					if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						$Err = "Invalid email format"; 
					}
				}

				if($Err == ''){
					echo json_encode(["success" => true]);
					mail('ion.dermengi859@gmail.com','Mesaj de pe site-ul iondermengi.milav.eu','Nume : '.$name.' | Email : '.$email.' | Mesaj : '.$message);
				}else{
					echo json_encode(["success" => false, "errorMsg" => $Err]);
				}
		    }
	 	}
	}			
}


?>