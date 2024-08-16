
package com.example.demo.controller;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> resgisterUser(@RequestBody User user) {
  
    try{
        User registeredUser = userService.registerService(user); // Assuming your service method is called registerUser
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
           
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        }
        @PostMapping("/signin")
        public ResponseEntity<?> loginUser(@RequestBody User user) {
            try {
                User userobj = userService.loginService(user.getEmail(), user.getPassword());
                if (userobj != null) {
                    return new ResponseEntity<>(userobj, HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                }
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
