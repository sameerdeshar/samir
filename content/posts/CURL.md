---
title: "What is SSO"
summary: This is sparta
date: 2024-12-20
aliases: ["/curl_the_world"]
tags: ["Curl", "Wget"]
author: ["Samir Deshar"]
draft: false
weight: 2
---

### **Save Output to a File**

**Command:**
```
curl -o output.html http://example.com
```
**What it does:**  
Saves the content of the webpage to a file named `output.html`.

### **Follow Redirects**
```
curl -L http://example.com
```
**What it does:**  
Follows any HTTP redirects and fetches the final destination page.

---
### **Show HTTP Headers**
**Command:**
```bash
curl -I http://example.com
```
**What it does:**  
Displays only the HTTP headers (e.g., status code, content type) of the requested page.

---

### **Download a File**
**Command:**
```
curl -O http://example.com/file.zip
```
**What it does:**  
Downloads a file from the URL and saves it with the same name as on the server.

---

### **Send a GET Request with Parameters**
**Command:**
```
curl "http://example.com/api?param1=value1&param2=value2"
```
**What it does:**  
Sends a GET request with query parameters to the server.

---

### **Send Data with a POST Request**
**Command:**
```
curl -X POST -d "key1=value1&key2=value2" http://example.com/api
```
**What it does:**  
Sends data using the POST method to an API or server.

---

### **Include Custom Headers**
**Command:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" http://example.com/api
```
**What it does:**  
Sends a request with a custom HTTP header, such as an API authorization token.

---

### **Send JSON Data**
**Command:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' http://example.com/api
```
**What it does:**  
Sends JSON-formatted data to an API endpoint using a POST request.

---

### **Test a Server’s Response Time**
**Command:**
```
curl -w "Time: %{time_total}s\n" -o /dev/null -s http://example.com
```
**What it does:**  
Measures the total time taken to get a response from the server without saving the content.

---

### **Download a File with Authentication**
**Command:**
```
curl -u username:password -O http://example.com/protected/file.zip
```
**What it does:**  
Downloads a file from a password-protected area by providing login credentials.

---

### **Upload a File**
**Command:**
```
curl -X POST -F "file=@/path/to/file.txt" http://example.com/upload
```
**What it does:**  
Uploads a file to a server via an HTTP POST request.

---

### **Use Proxy**
**Command:**
```
curl -x http://proxyserver:port http://example.com
```
**What it does:**  
Routes the request through a proxy server.

---

### **Limit Download Speed**
**Command:**
```
curl --limit-rate 100k http://example.com/file.zip
```
**What it does:**  
Limits the download speed to 100 KB/s.

---

### **Resume a Download**
**Command:**
```
curl -C - -O http://example.com/largefile.zip
```
**What it does:**  
Resumes an interrupted download of a file.

---

### **Perform FTP Operations**
**Command:**
```
curl ftp://example.com/file.txt --user username:password
```
**What it does:**  
Downloads a file from an FTP server using credentials.

---

### **Debug Requests**
**Command:**
```
curl -v http://example.com
```
**What it does:**  
Shows detailed information about the request and response, useful for debugging.

---

### **Use a Specific Protocol**
**Command:**
```
curl --http2 http://example.com
```
**What it does:**  
Forces the request to use HTTP/2 protocol.

---

### **Suppress Output**
**Command:**
```bash
curl -s http://example.com
```
**What it does:**  
Runs curl silently, suppressing progress and error messages.

---

### **Test Authentication**
**Command:**
```
curl -u user:pass http://example.com
```
**What it does:**  
Tests HTTP Basic Authentication by providing a username and password.

---

### **Send a DELETE Request**
**Command:**
```
curl -X DELETE http://example.com/api/resource/123
```
**What it does:**  
Sends a DELETE request to remove a resource on the server.

---

### **Save Cookies**
**Command:**
```
curl -c cookies.txt http://example.com
```
**What it does:**  
Saves server-set cookies to a file.

---

### **Use Saved Cookies**
**Command:**
```
curl -b cookies.txt http://example.com
```
**What it does:**  
Uses the previously saved cookies for the request.

---
### **Use Multiple URLs**
**Command:**
```
curl -O http://example.com/file1.txt -O http://example.com/file2.txt
```
**What it does:**  
Downloads multiple files in a single command. 

---