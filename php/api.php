<?php
	error_reporting(1);
	$input_data = trim(file_get_contents("php://input"));
	file_put_contents("test.txt", $input_data);
	$request = json_decode($input_data,true);
	$json = file_get_contents("data.json");
	$arr = json_decode($json,true);
	$contents = json_decode($arr['content'],true);
	if($request['QueryType']=='GetPost'){
		$page_count = ceil(count($contents['post'])/10);
		$page = $request['page'];
		$tag = $request['tag'];
		$start = ($page-1)*10;
		$end = 10+$start;
		$return = array();
		if(!empty($tag)){
			$tag_return = array();
			for ($i=0;$i<count($contents['post']);$i++){
				if(isset($contents['post'][$i]) && preg_match("/.*?$tag.*?/i", $contents['post'][$i]['title'])){
					$tag_return[] = $contents['post'][$start];
				}
			}
			$page_count = ceil(count($tag_return)/10);
		}
		for ($start;$start<$end;$start++){
			if(!empty($tag)){
				if(isset($tag_return[$start])){
					$return[] = $tag_return[$start];
				}
			}else{
				if(isset($contents['post'][$start])){
					$return[] = $contents['post'][$start];
				}
			}
		}
		$contents['post'] = array_values($return);
		$arr['content'] = json_encode($contents);
		$arr['page_count'] = $page_count;
		$arr['page'] = $page;
		echo json_encode($arr);exit;
	}elseif($request['QueryType']=='GetPostDetail'){
		$id = $request['id'];
		foreach ($contents['post'] as $content){
			if($content['id']==$id){
				$return[] = $content;
				break;
			}
		}
		$contents['post'] = $return;
		$arr['content'] = json_encode($contents);
		echo json_encode($arr);exit;
	}
?>