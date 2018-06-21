<?php
namespace application\core;

class MilavApi {

	private $api_endpoint = 'http://iondermengi.milav.eu/application/api/api';
  private $result = false;

   public function call($method) {

            $data = $this->_raw_request($method);

        return $data;
    }

	private function _raw_request($method) {
        $url = $this->api_endpoint . '/' . $method . '/read.php?';
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);

        $result = curl_exec($ch);
        curl_close($ch);

        $result = json_decode($result);
        if ($result === false) {
            throw new CHttpException(503, 'Failed to retrieve API data.');
        }

        if (isset($result->data)) {
            $result = $result->data;
        }

        return $result;
    }

     public function getBasic() {
        $data = $this->call('basic');
        if($data == null){
            return ['Basic' => 0, 'dates' => []];
        }
        // $data = $data[0];
        // $data = array(
        //     'id'=>$data->id,
        //     'ssd_storage'=>$data->ssd_storage,
        //     'monthly_traffic'=>$data->monthly_traffic,
        //     'hosted_domains'=>$data->hosted_domains,
        //     'mail_boxes'=>$data->mail_boxes,
        //     'nr_database'=>$data->nr_database,
        //     'ftp_account'=>$data->ftp_account,
        //     'parced_domains'=>$data->parced_domains,
        //     'subdomains'=>$data->subdomains
        // );
        return $data;
    }
    public function getStart() {
        $data = $this->call('start');
        if($data == null){
            return ['Start' => 0, 'dates' => []];
        }
        // $data = $data[0];
        // $data = array(
        //     'id'=>$data->id,
        //     'ssd_storage'=>$data->ssd_storage,
        //     'monthly_traffic'=>$data->monthly_traffic,
        //     'hosted_domains'=>$data->hosted_domains,
        //     'mail_boxes'=>$data->mail_boxes,
        //     'nr_database'=>$data->nr_database,
        //     'ftp_account'=>$data->ftp_account,
        //     'parced_domains'=>$data->parced_domains,
        //     'subdomains'=>$data->subdomains
        // );
        return $data;
    }
     public function getBusiness() {
        $data = $this->call('business');
        if($data == null){
            return ['Business' => 0, 'dates' => []];
        }
        // $data = $data[0];
        // $data = array(
        //     'id'=>$data->id,
        //     'ssd_storage'=>$data->ssd_storage,
        //     'monthly_traffic'=>$data->monthly_traffic,
        //     'hosted_domains'=>$data->hosted_domains,
        //     'mail_boxes'=>$data->mail_boxes,
        //     'nr_database'=>$data->nr_database,
        //     'ftp_account'=>$data->ftp_account,
        //     'parced_domains'=>$data->parced_domains,
        //     'subdomains'=>$data->subdomains
        // );
        return $data;
    }
     public function getProfesional() {
        $data = $this->call('profesional');
        if($data == null){
            return ['Profesional' => 0, 'dates' => []];
        }
        // $data = $data[0];
        // $data = array(
        //     'id'=>$data->id,
        //     'ssd_storage'=>$data->ssd_storage,
        //     'monthly_traffic'=>$data->monthly_traffic,
        //     'hosted_domains'=>$data->hosted_domains,
        //     'mail_boxes'=>$data->mail_boxes,
        //     'nr_database'=>$data->nr_database,
        //     'ftp_account'=>$data->ftp_account,
        //     'parced_domains'=>$data->parced_domains,
        //     'subdomains'=>$data->subdomains
        // );
        return $data;
    }
     public function getCorporate() {
        $data = $this->call('corporate');
        if($data == null){
            return ['Corporate' => 0, 'dates' => []];
        }
        // $data = $data[0];
        // $data = array(
        //     'id'=>$data->id,
        //     'ssd_storage'=>$data->ssd_storage,
        //     'monthly_traffic'=>$data->monthly_traffic,
        //     'hosted_domains'=>$data->hosted_domains,
        //     'mail_boxes'=>$data->mail_boxes,
        //     'nr_database'=>$data->nr_database,
        //     'ftp_account'=>$data->ftp_account,
        //     'parced_domains'=>$data->parced_domains,
        //     'subdomains'=>$data->subdomains
        // );
        return $data;
    }
}

?>