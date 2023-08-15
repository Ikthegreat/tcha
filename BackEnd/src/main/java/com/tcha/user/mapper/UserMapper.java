package com.tcha.user.mapper;

import com.tcha.user.dto.UserDto;
import com.tcha.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto.Response userToResponse(User user);

}

/*
TODO

- Dto, mapper 필요성 판단
 */
