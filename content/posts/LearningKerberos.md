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

### What is Kerberos?

Kerberos is a secure network authentication protocol, widely used as the default authentication mechanism for Microsoft Windows domains. It uses a ticket-based system and strong encryption to authenticate users and services securely. Kerberos improves on older protocols like NTLM by employing third-party ticket authorization and enhanced security measures. However, it still has exploitable vulnerabilities that attackers can leverage.

---

### How Does Kerberos Work?

Kerberos operates as a **Single Sign-On (SSO)** protocol using a ticket-based authentication scheme. The user’s password is stored as a hashed value in the Security Account Manager (SAM) database on Windows systems:

```
C:\Windows\System32\config\SAM
```

Key steps in Kerberos authentication:
1. **Password Hash Encryption**: The user’s password hash is used to encrypt authentication messages.
2. **Server Decryption**: The server validates the user by decrypting the messages with the stored password hash.

---

### Common Terminology in Kerberos

- **Ticket Granting Ticket (TGT)**: An authentication ticket used to request service tickets for accessing domain resources.
- **Key Distribution Center (KDC)**: A central service that issues TGTs and service tickets. It includes:
  - **Authentication Service (AS)**: Issues TGTs to users.
  - **Ticket Granting Service (TGS)**: Issues service tickets based on valid TGTs.
- **Service Principal Name (SPN)**: An identifier for a specific service instance linked to a domain service account.
- **Long Term Secret Keys**:
  - **KDC LT Key**: Encrypts TGTs and signs the Privilege Attribute Certificate (PAC).
  - **Client LT Key**: Encrypts timestamps and session keys during authentication.
  - **Service LT Key**: Encrypts service tickets and signs the PAC.
- **Session Key**: A temporary key issued for communication between the client and services.
- **Privilege Attribute Certificate (PAC)**: Contains user information, including privileges, signed to validate authenticity.

---

### How Kerberos Works: Step-by-Step

#### 1. **Authentication Phase (Getting a TGT)**

1. **User Login**: The user enters their password, which is hashed (e.g., SHA-256).
2. **Request to AS**: The client sends the username to the Authentication Service (AS).
3. **TGT Creation**: The AS verifies the user, generates a TGT, and encrypts it using the user’s password hash.
4. **Receive TGT**: The client decrypts the TGT to authenticate and holds the TGT for future service requests.

#### 2. **Ticket Granting Phase (Getting a Service Ticket)**

1. **Request to TGS**: The client sends the TGT and an Authenticator (timestamp encrypted with the session key) to the TGS.
2. **Service Ticket Creation**: The TGS verifies the TGT and Authenticator, then issues a Service Ticket encrypted with the target service's key.
3. **Receive Service Ticket**: The client uses this ticket to access the requested service.

#### 3. **Service Access Phase (Using the Service Ticket)**

1. **Service Request**: The client sends the Service Ticket and a new Authenticator to the target service.
2. **Access Validation**: The service validates the ticket and Authenticator, granting access if they are valid.

---

### Kerberos Tickets Overview

- **TGT (Ticket Granting Ticket)**: Used to request service tickets from the KDC.
- **Service Tickets**: Specific to services, allowing users to authenticate and access resources.

Tickets can be represented in different formats (e.g., `.kirbi` for Rubeus or `.ccache` for Impacket) and may be base64-encoded for certain attacks.

---

### Steps in Kerberos Authentication

1. **AS-REQ**: The client requests a TGT from the AS.
2. **AS-REP**: The AS sends back an encrypted TGT.
3. **TGS-REQ**: The client sends the TGT to the TGS with the SPN of the service.
4. **TGS-REP**: The TGS validates the TGT and sends a Service Ticket.
5. **AP-REQ**: The client requests the service with the Service Ticket.
6. **AP-REP**: The service validates the ticket and grants access.

---

### Attacking the Kerberos Protocol

#### **Kerbrute**  
A powerful tool for enumerating Active Directory users by exploiting Kerberos pre-authentication vulnerabilities.

**Examples**:
```bash
kerbrute userenum --dc CONTROLLER.local -d CONTROLLER.local User.txt
kerbrute userenum users.txt -d spookysec.local --dc 10.10.74.37
```

These commands attempt to brute-force and enumerate valid usernames by sending requests to the KDC.

---

Kerberos remains a critical authentication protocol in modern networks. While it enhances security, understanding its mechanics and vulnerabilities is essential for both defensive and offensive cybersecurity operations.