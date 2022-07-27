package com.algorithm.server.api.controller;

import com.algorithm.server.api.dto.GithubDto;
import com.algorithm.server.common.BaseResponseBody;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/login/github")
@Api(value = "깃 헙 소셜 로그인 API",  tags = {"Github"})
public class GithubApiController {

    @Value(("${GITHUB_CLIENT_ID}"))
    String CLIENT_ID;

    @Value("${GITHUB_CLIENT_PW}")
    String CLIENT_PW;

    @PostMapping
    @ApiOperation(value = "Github code 받는다", notes = "Github code 받는다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> githubAccesstoken(
            @RequestBody @ApiParam(value="유저 정보", required = true) GithubDto.getGithubToken getGithubToken
            ){

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://github.com/login/oauth/authorize";
        String code = getGithubToken.getCode().toString();

        HttpHeaders httpHeaders = new HttpHeaders();
        // 헤더
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        // 바디
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        // 바디 값 추가
        body.add("client_id", CLIENT_ID);
        body.add("client_pw", CLIENT_PW);
        body.add("code", code);
        // 전체 엔티티 확정
        HttpEntity<?> requestMessage = new HttpEntity<>(body, httpHeaders);
        // 전송
        HttpEntity<String> response = restTemplate.postForEntity(url, requestMessage, String.class);
        System.out.println(response.getBody().toString());

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "성공"));
    }

}
