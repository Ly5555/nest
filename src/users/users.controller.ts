import { Controller,Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
	@Get()
	loadData(){
		return this.userService.loadAll();
	}
	@Get(':id')
	getOne(@Param() params){
		return this.userService.findOne(params.id);
	}
}
