---
title: "What is OAuth"
summary: This is sparta
date: 2024-12-20
aliases: ["/curl_the_world"]
tags: ["Curl", "Wget"]
author: ["Samir Deshar"]
draft: false
weight: 3
---

**OAuth** is a method for authorization that allows access to third-party applications or services without requiring the sharing of usernames and passwords.
## How OAuth 2.0 Works?

**OAuth 2.0** is an authorization protocol designed to provide secure delegated access to resources without exposing user credentials to third-party applications.

### **Key Components**:

- **Resource Owner**: The user who owns the data or resource.
- **Client**: The application requesting access to the user’s resource on behalf of the user (e.g., a web or mobile app).
- **Resource Server**: The server hosting the protected resources (e.g., an API).
- **Authorization Server**: The server that authenticates the user and issues **access tokens**. This may be the same as the Resource Server.

### **OAuth Flows (Grant Types)**:

OAuth 2.0 offers different authorization flows based on the type of application and security requirements.

#### 1. **Authorization Code Grant (Most Secure)**

This is the most commonly used flow for server-side web applications.

**Steps**:

1. **Client Requests Authorization**: The client redirects the user to the authorization server with a request for permission to access the resource.
2. **User Authorizes the Client**: The user logs into the authorization server and consents to the requested access.
3. **Authorization Code Issued**: Upon approval, the authorization server redirects the user back to the client with an **authorization code**.
4. **Client Exchanges Code for Access Token**: The client securely exchanges the **authorization code** for an **access token** by sending a request to the authorization server.
5. **Client Accesses Resource**: The client uses the **access token** to request the resource from the **Resource Server**.
![[Pasted image 20241017145740.png]]

#### 2. **Implicit Grant (Less Secure)**

Primarily used by single-page apps (SPAs) or public clients where keeping credentials secret is difficult.

**Steps**:

1. **Client Requests Authorization**: The client redirects the user to the authorization server.
2. **User Authorizes**: The user approves the request, and the authorization server redirects the user back with an **access token**.
3. **Client Accesses Resource**: The client immediately uses the **access token** to request resources.

> This flow is considered less secure because the **access token** is exposed in the URL.

![OAuth Image](images/post/apm_sso.png)

#### 3. **Client Credentials Grant**

Used for machine-to-machine communication without user interaction.

**Steps**:

1. **Client Requests Access Token**: The client directly requests an **access token** by presenting its **client ID** and **client secret** to the authorization server.
2. **Access Token Issued**: If the credentials are valid, the authorization server issues an **access token**.
3. **Client Accesses Resource**: The client uses the **access token** to access the protected resource.

![[Pasted image 20241017150006.png]]
#### 4. **Password Grant (Deprecated)**

Allows the client to use the user’s credentials (username and password) to directly request an **access token**.

**Steps**:

1. **Client Sends Credentials**: The client sends the user’s username and password to the authorization server.
2. **Access Token Issued**: The server validates the credentials and issues an **access token**.
3. **Client Accesses Resource**: The client uses the **access token** to request resources.

> This method is not recommended due to security concerns, as it requires the user to share their credentials with the client.

#### 5. **Refresh Token**

Allows the client to obtain a new **access token** without involving the user when the original token expires.

**Steps**:

1. **Client Sends Refresh Token**: The client sends a valid **refresh token** to the authorization server.
2. **Access Token Issued**: The server responds with a new **access token**.

### **Security Mechanisms in OAuth 2.0**

OAuth 2.0 includes several security measures to protect data and prevent unauthorized access:

1. **Access Token Expiration**: Tokens have a limited lifespan to minimize the risk of misuse.
2. **Scopes**: Tokens include scopes that define the level of access to resources. This ensures the client only accesses what’s necessary.
3. **Token Encryption**: In some cases, **access tokens** are encrypted to prevent unauthorized inspection.
4. **Authorization Code Exchange**: In the **authorization code flow**, the token is not returned directly to the client. Instead, it’s exchanged securely using client credentials, reducing exposure.
5. **PKCE (Proof Key for Code Exchange)**: An extension to OAuth 2.0 that adds an extra layer of security to public clients (like mobile apps) by mitigating the risk of code interception.


**JWT (JSON Web Token)** is a compact, URL-safe token used to represent claims between two parties. It allows for secure transmission of information, often used for **authorization** without sharing credentials like usernames or passwords.
#### JWT consists of three parts:
1. **Header**:
    - This contains metadata about the token, including the **type** (typically "JWT") and the **algorithm** used for signing (e.g., HS256, RS256).
2. **Payload**:
    - The payload carries **claims**, which are pieces of data about the user or session, such as the **user identity**, **roles**, or **expiration time** (`exp`). This is the part where the user information is stored.
3. **Signature**:
    - The signature ensures the integrity of the token. It is created by combining the **header** and **payload**, hashing them, and then signing with a **secret** or **private key**. The signature is what protects the token from being tampered with.
#### How Verification Works:

- The **signature** is verified by the recipient (often the resource server) to ensure the JWT hasn’t been altered.
- If asymmetric algorithms (like RSA) are used:
    - The **server signs** the token with a **private key**.
    - The recipient (resource server) uses the **public key** to **decode** the signature and validate that the content (header and payload) has not been modified.
    - The **hash** from the header and payload is recalculated by the resource server, and if it matches the **signature**, the token is verified as valid.
#### Access Granting:

- Once the **JWT is validated** and confirmed to be untampered, the **resource server** (the application the user is trying to access) grants access based on the claims (e.g., user identity, permissions) in the payload.

