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
        debug($result);
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
        // $basicdata = $data->nrofprops;
        // $properties = $data->entry;

        // return ['nrofprops' => $nrofprops, 'properties' => $properties];
    }
}

?>