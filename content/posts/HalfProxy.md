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

So basically the half proxies are those that initiate connection to the proxy and forward the connection to the server. While the server repose directly back to the client.
This is also known as DSR(Direct Server Response).

### Step on how this works and why would client accept the response from a completely new ip than the proxy VS which we had requested for?

Let's assume following.
**CLIENT** -> 192.168.1.1
**VS**/**PROXY** -> 10.2.0.1
**SERVER** -> 10.3.0.1

STEPS:
1. **Client Initiates a Request:**

	- **Client IP:** `192.168.1.1`
	- **Virtual Server (VS)/Proxy IP:** `10.2.0.1`
	- **Server IP:** `10.3.0.1`
	
	The client sends a request to the Virtual Server (VS) or proxy IP (`10.2.0.1`). This VS IP is usually configured on the proxy or load balancer.
	
		Source IP: 192.168.1.1
		Destination IP: 10.2.0.1 (VS/Proxy)


2. **Proxy Receives and Forwards the Request:**

	- The request reaches the VS (`10.2.0.1`). In a half proxy/DSR setup, the proxy does not modify the source or destination IP addresses when forwarding the request to the backend server (`10.3.0.1`).
	
	The proxy simply forwards the packet to the backend server with the following headers:
			Source IP: 192.168.1.1
			Destination IP: 10.2.0.1 (VS/Proxy IP)

3. **Server Accepts the Packet with VS IP:**

	- Here’s where DSR comes into play. The backend server (`10.3.0.1`) is configured with a **secondary IP address** (also known as a loopback or alias IP) that matches the VS IP (`10.2.0.1`).
	- Because the server sees the destination IP as `10.2.0.1`, and it has this IP configured as a secondary IP, it accepts the packet as if it was meant for itself.
 
4. **Server Sends the Response:**

	- When the server responds, the **source IP of the response** is set to the destination IP of the incoming packet, which is the VS IP (`10.2.0.1`).
	- The response packet has the following headers
	
			Source IP: 10.2.0.1 (VS IP, configured as server loopback)
			Destination IP: 192.168.1.1 (Client IP)
5. **Response Goes Directly to the Client:**

	- The server sends the response **directly to the client** (`192.168.1.1`), bypassing the proxy or VS. This is why it’s called **Direct Server Return (DSR)**.
	- The client receives the response directly from the server (`10.3.0.1`), but it appears to be from the VS IP (`10.2.0.1`), which the client originally requested.

### Why Does the Client Accept the Response from a Different IP?

- The key is that **the client sees the same IP address** it initially requested (i.e., `10.2.0.1`).
- Even though the response is coming **directly from the backend server**, the **source IP in the response** is still set to the VS IP (`10.2.0.1`), making it look like it’s coming from the proxy or load balancer that the client originally contacted.

##  Important Points in DSR/Half Proxy:
1. **Server Configuration:**
    - The backend server must have the VS IP configured as a loopback or secondary IP to accept traffic destined for it.
2. **IP Address Handling:**
    - The VS IP is used for both forwarding the request and as the source of the server’s response, even though the response is sent directly from the server to the client.
3. **Direct Server Response:**
    - The server bypasses the proxy for responses, reducing the proxy’s load and improving response times.
