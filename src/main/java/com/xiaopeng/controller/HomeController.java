package com.xiaopeng.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller
public class HomeController {

    private final String UPLOAD_DIR = "./uploads/";

    // inject via application.properties
    @Value("Xiaopeng Rong")
    private String myName;

    private String saveNameSuccess;

    @Value("You saved photo successfully")
    private String savephotoSuccess;

    private List<String> inputName = new ArrayList<String>();

    @GetMapping("/")
    public String main(Model model) {

        return "home"; //view
    }

    @GetMapping("/name")
    public String getName(Model model) {
        model.addAttribute("myName", myName);
        return "home"; //view
    }

    @PostMapping("/user")
    public String saveUser(Model model,@RequestParam String name) {
        inputName.add(name);
        model.addAttribute("saveNameSuccess", "You successfully saved " + name + '!');
        return "home";
    }

    @PostMapping("/upload")
    public String uploadFile(Model model, @RequestParam("file") MultipartFile file, RedirectAttributes attributes) {

        // check if file is empty
        if (file.isEmpty()) {
            attributes.addFlashAttribute("message", "Please select a file to upload.");
            return "redirect:/";
        }

        // normalize the file path
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        // save the file on the local file system
        try {
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // return success response
        model.addAttribute("savephotoSuccess", "You successfully uploaded " + fileName + '!');

        return "home";
    }

}