package com.algorithm.server.api.dto;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

public class GithubDto {

    @Getter
    @Setter
    // swagger dto 설명 미리 달아놓기
    @ApiModel("Github Login Dto 파라미터값 사전 정의")
    public static class GithubLoginDto{

    }

}
