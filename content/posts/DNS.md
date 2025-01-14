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


### **Understanding DNS : How the Internet Knows Where to Go**

The **Domain Name System (DNS)** is like the internet's phonebook. It helps translate human-friendly domain names (e.g., `samirdeshar.com.np`) into machine-friendly IP addresses (e.g., `172.66.44.181`) so computers can find and connect to websites or services.

---

### **What Is DNS?**

Imagine if you had to memorize IP addresses like `172.66.44.181` every time you wanted to visit a website. That would be difficult! DNS solves this by associating domain names with their respective IP addresses. It works in the background whenever you access a website, send an email, or use an online service.

**Key Terms for Beginners**:

- **Domain Name**: The human-readable name (e.g., `example.com`).
- **IP Address**: The numerical address of a server (e.g., `192.168.1.1`).
- **DNS Resolver**: A server that helps your device find the IP address for a domain name.

---

### **How DNS Works: Step-by-Step**

Here’s a beginner-friendly breakdown of how DNS translates a domain name to an IP:

1. **You Type a Domain Name**:
    
    - For example, you type `samirdeshar.com.np` in your browser. Your computer needs to find the IP address for this domain to connect.
2. **Query Sent to DNS Resolver**:
    
    - Your device asks a **DNS resolver** (provided by your ISP or a public DNS like Google DNS) to resolve the domain name into an IP address.
3. **Resolver Queries Root Servers**:
    
    - If the resolver doesn’t already know the answer, it asks a **root server**. Root servers guide the resolver to the next step by pointing it to the appropriate **Top-Level Domain (TLD) server**.
4. **Querying TLD Servers**:
    
    - The resolver contacts a TLD server (e.g., `.np` for Nepal). TLD servers store information about domains within their extension.
5. **Finding Authoritative Nameservers**:
    
    - The TLD server responds with the **authoritative nameserver** for the domain (e.g., Cloudflare for `samirdeshar.com.np`).
6. **Getting the IP Address**:
    
    - The resolver queries the authoritative nameserver, which provides the IP address of the domain.
7. **Returning the IP to Your Browser**:
    
    - The resolver sends the IP address back to your browser, which uses it to connect to the server and load the website.

---

### **A Practical Example**

Let’s apply this to `samirdeshar.com.np`:

1. **You visit `samirdeshar.com.np`**.
2. **Your browser sends a request to a DNS resolver** (e.g., Google DNS at `8.8.8.8`).
3. **The resolver contacts a root server** for `.np`.
4. **The root server directs the resolver to the `.np` TLD servers**.
5. **The `.np` TLD server directs the resolver to Cloudflare’s DNS servers**, which manage `samirdeshar.com.np`.
6. **Cloudflare’s server provides the IP address** (e.g., `172.66.44.181`).
7. **The browser connects to `172.66.44.181`** to load the website.

---

### **The Basics of DNS Records**

DNS uses different types of records to manage domains. Here are the most common:

- **A Record**: Maps a domain to an IPv4 address.
- **AAAA Record**: Maps a domain to an IPv6 address.
- **CNAME Record**: Creates an alias for another domain.
- **MX Record**: Directs email to a mail server.
- **NS Record**: Points to the nameservers for a domain.

---

### **What Happens Behind the Scenes?**

DNS uses **tags** and **zones** to organize and manage data:

1. **Zones** define administrative boundaries, such as the `.np` zone for Nepal.
2. **Tags** (like VLAN tagging in networks) help identify traffic and maintain separation, especially in complex environments like hosting multiple subdomains.

---

### **Real-Life Applications of DNS**

1. **Browsing Websites**:
    - DNS makes accessing `example.com` possible without memorizing IP addresses.
2. **Email Delivery**:
    - MX records ensure emails reach the correct servers.
3. **Load Balancing**:
    - DNS directs users to the nearest server for faster responses.
4. **Content Delivery Networks (CDNs)**:
    - DNS routes requests to distributed servers based on geography.

---

### **DNS Security Concerns**

1. **DNS Spoofing**:
    - Hackers can redirect users to malicious websites. **DNSSEC** (DNS Security Extensions) helps by validating responses.
2. **Cache Poisoning**:
    - Attackers inject false data into DNS caches. Using trusted resolvers mitigates this.
3. **DDoS Attacks**:
    - Public DNS servers can be overloaded. Rate limiting and filtering help protect them.

---

### **How to Check DNS Resolution**

Here are some commands to explore DNS on your system:

- **Trace DNS Resolution/(trace the path)**:
    
    ```bash
    dig +trace samirdeshar.com.np
    ```
- **Query Root Servers**:
    
    ```bash
    dig @a.root-servers.net samirdeshar.com.np
    ```
- **Querying the Authoritative Servers directly**:
  ```bash
  dig @jobs.ns.cloudflare.com samirdeshar.com.np
  ```
- **Get IP Address**:
    
    ```bash
    dig samirdeshar.com.np +short
    ```
- **Clean output (just the IP)**:
  ```bash
  dig @jobs.ns.cloudflare.com samirdeshar.com.np +short
  ```

### What `dig +trace` Shows

The `dig +trace` command shows each step in the DNS resolution path, from root servers to the authoritative server:

- **Root Servers**: The first part of the output shows which root server was queried and which `.np` TLD servers it provided in response.
- **`.np` TLD Servers**: The next section shows the `.np` servers directing the resolver to the authoritative Cloudflare DNS servers.
- **Authoritative Server**: Finally, the output shows Cloudflare’s authoritative server providing the IP addresses of `samirdeshar.com.np`.

In summary, DNS resolution goes through these steps: **Root Servers** → **.np TLD Servers** → **Authoritative Cloudflare Servers** → **IP Address for the website**.

---

### **Conclusion**

DNS is the silent engine behind the internet. Without it, we'd be stuck memorizing IP addresses. Whether you’re a beginner or a seasoned techie, understanding DNS is crucial for navigating and managing networks. From resolving your favorite websites to enabling secure communication, DNS underpins how we interact with the web today.