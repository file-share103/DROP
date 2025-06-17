Here’s a **Basic Kali Linux Commands Cheat Sheet** for beginners, covering essential terminal commands you'll frequently use for file management, navigation, networking, system info, and tools in **Kali Linux** – especially useful for ethical hacking and pentesting tasks.

---

# 🐉 **Basic Kali Linux Commands Cheat Sheet**

---

## 📁 **File & Directory Navigation**

| Command            | Description             |
| ------------------ | ----------------------- |
| `pwd`              | Show current directory  |
| `ls`               | List directory contents |
| `cd <dir>`         | Change directory        |
| `cd ..`            | Go up one directory     |
| `mkdir <dir>`      | Create new directory    |
| `rmdir <dir>`      | Remove empty directory  |
| `rm -r <dir/file>` | Delete file/folder      |
| `touch <file>`     | Create empty file       |

---

## 🗂️ **File Operations**

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `cp file1 file2`  | Copy file                            |
| `cp -r dir1 dir2` | Copy directory recursively           |
| `mv old new`      | Rename or move file/folder           |
| `cat file.txt`    | View file content                    |
| `less file.txt`   | View with scroll (press `q` to quit) |

---

## ⚙️ **System Info & Management**

| Command    | Description                        |
| ---------- | ---------------------------------- |
| `whoami`   | Show current user                  |
| `id`       | Show UID/GID                       |
| `uname -a` | Kernel and system info             |
| `top`      | View running processes             |
| `htop`     | Enhanced `top` (press `q` to quit) |
| `df -h`    | Show disk usage                    |
| `free -h`  | Show memory usage                  |
| `uptime`   | System running time                |

---

## 🌐 **Networking Tools (Pentesting Basics)**

| Command                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `ifconfig`              | Show network interfaces (use `ip a` instead on newer systems) |
| `ip a`                  | Show IP address & interface info                              |
| `ping google.com`       | Check network connectivity                                    |
| `traceroute google.com` | Trace path to a host                                          |
| `netstat -tuln`         | Show open ports                                               |
| `nmap <IP>`             | Network scan (requires `nmap`)                                |
| `curl <url>`            | Get web content from terminal                                 |
| `wget <url>`            | Download file from web                                        |

---

## 🔐 **User & Permission Commands**

| Command                 | Description              |
| ----------------------- | ------------------------ |
| `sudo <cmd>`            | Run command as superuser |
| `adduser <name>`        | Add a new user           |
| `passwd`                | Change password          |
| `chmod +x script.sh`    | Make file executable     |
| `chown user:group file` | Change file owner        |

---

## 💣 **Hacking Tools Usage (Just Basics)**

| Command                 | Description                |
| ----------------------- | -------------------------- |
| `nmap <target>`         | Scan target IP/network     |
| `airmon-ng`             | Manage Wi-Fi monitor mode  |
| `airdump-ng`            | Capture Wi-Fi traffic      |
| `hydra`                 | Brute-force login tool     |
| `msfconsole`            | Start Metasploit Framework |
| `sqlmap -u <url> --dbs` | Auto SQL injection test    |

> 🧠 *Tools like `nmap`, `hydra`, `sqlmap`, `metasploit`, etc., are pre-installed in Kali.*

---

## 📦 **Package Management (APT-based)**

| Command                  | Description         |
| ------------------------ | ------------------- |
| `sudo apt update`        | Update package list |
| `sudo apt upgrade`       | Upgrade packages    |
| `sudo apt install <pkg>` | Install new package |
| `sudo apt remove <pkg>`  | Remove package      |

---

## 📝 **Example Pentest Setup**

```bash
sudo apt update
ifconfig                     # Check IP
ping google.com              # Confirm network
nmap -sV 192.168.1.1         # Scan router services
msfconsole                   # Start Metasploit
```

---

Would you like a **printable PDF version** or a **tool-specific cheat sheet** next (e.g., for Nmap, Metasploit, etc.)?
