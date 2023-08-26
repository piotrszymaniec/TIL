### WSL - windows subsystem for linux

1. if wsl not installed, go to windows store and install
2. use latest ubuntu ```wsl --list --online```
3. install it (ex. for ubuntu 22.4) ```wsl --install Ubuntu-22.4```

### Troubleshooting
For unknown? reason i got  
 ![error](https://i.imgur.com/cOpUami.png)

 ```Error: 0x8007007e Can't find specific module```

 ### Looking for help
 #### 1. Use chat gpt [Chat GPT](https://chat.openai.com)
 Our chat went like this
 
**Chat**
```
Error code 0x8007007e typically appears in the context of Windows operating systems and is related to issues with dynamic link libraries (DLLs). However, you mentioned that you encountered this error while trying to install Ubuntu 22.04, which is a Linux distribution. This error code doesn't directly correlate with Linux installations, so there might be some confusion or a mix-up of information.
To assist you further, could you provide more details about the context in which you encountered this error? Specifically:

1. Are you trying to install Ubuntu alongside Windows as a dual-boot setup, or are you attempting to install it as the sole operating system on your machine?
2. Where did you see this error message? Was it during the installation process, or did it appear at a different stage?
3. Did you encounter any other error messages or issues prior to seeing this error?
4. Can you describe your hardware setup? Are you using a specific computer or laptop model?
Providing this additional information will help me better understand your situation and provide more accurate guidance.
```
**Me**:
```
answers to your questions: 1. im trying to install it as wsl for windows. 2. when i typed wsl --install Ununtu-22.04 the error 0x800707e appeared. 3. no 4. its amd ryzen 7600 with 32gb ram and msi pro b650-p motherboard and 2tb m.2 ssd
```
**Chat**
Thank you for providing more information. Since you're trying to install Ubuntu 22.04 as Windows Subsystem for Linux (WSL) and encountering the error code 0x8007007e, this indicates an **issue within the Windows environment**, not directly related to the Ubuntu installation itself. This error code is commonly associated with Windows DLL-related problems.

Here are some steps you can try to resolve the issue:

1. Check System Requirements:
**done: Ensure that your system meets the minimum requirements for WSL 2:**
```A 64-bit Windows 10 version 1903 or higher with Build 18362 or higher.```
 - mine - A 64-bit Windows 10 22H2 build 19045.3324
 **todo: Virtualization capabilities enabled in BIOS/UEFI settings.**
   I dont know

2. **done: Update Windows:**
- Make sure your Windows operating system is fully updated. This includes all important and optional updates.

3. Enable Virtualization:
Confirm that virtualization is enabled in your computer's BIOS/UEFI settings. Virtualization must be enabled for WSL 2 to function properly.
![](https://i.imgur.com/5s0ZZqT.png)
4. Check Windows Features:
Before installing Ubuntu 22.04, ensure that the Windows Subsystem for Linux feature is enabled:

Open "Turn Windows features on or off" from the Control Panel or by searching in the Start menu.
Check the box for "Windows Subsystem for Linux" and click OK.
Check Hyper-V:
If you have Hyper-V enabled, it might conflict with WSL 2. You can't use both Hyper-V and WSL 2 at the same time. If you need to use both, you might need to switch between them.
