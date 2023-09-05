# Diagnostic Service missing

```
net localgroup Administratorzy /add networkservice
net localgroup Administratorzy /add localservice
```
https://www.wintips.org/fix-diagnostic-policy-service-cannot-start-access-is-denied-error-5/

locate in registry
DPS in Services, add rights for current user
locate 
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WDI\Config`
add rights for `NT Service\DPS` or just `DPS`
