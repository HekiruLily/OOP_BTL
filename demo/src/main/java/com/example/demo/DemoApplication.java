//aka main.java

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("Hello World");

	//demo
		Admin admin = new Admin();
	
		//demo thêm người chơi
		Player player1 = new Player("abc", "xyz");
		admin.addPlayer(player1);
	
		// demo xóa người chơi
		admin.removePlayer(player1);
	}

}