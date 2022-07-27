package com.algorithm.server.api.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class GithubDto {

    @Getter
    @Setter
    // swagger dto 설명 미리 달아놓기
    @ApiModel("Github Login Dto 파라미터값 사전 정의")
    public static class getGithubToken{
        @ApiModelProperty(name="고객 code", required = true)
        String code;
    }


    @Getter
    @Setter
    @ApiModel("Github Response 예제")
    public static class GithubResponse{
        @ApiModelProperty(name = "access_token", required = true)
        String access_token;

        @ApiModelProperty(name = "scope", required = true)
        String scope;

        @ApiModelProperty(name = "token_type", required = true)
        String token_type;
    }

}
