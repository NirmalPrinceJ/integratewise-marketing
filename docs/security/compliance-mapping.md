# Regulatory Compliance Mapping

> Mapping of IntegrateWise controls to SOC 2, ISO 27001, GDPR, and HIPAA requirements.

## SOC 2 Type II Control Families

### CC1: Control Environment

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC1.1 - Integrity and ethical values | Code of conduct, security policies, employee training |
| CC1.2 - Board oversight | Quarterly security reviews, audit committee |
| CC1.3 - Organizational structure | Defined security roles, RACI matrix |
| CC1.4 - Commitment to competence | Security certifications, ongoing training |
| CC1.5 - Accountability | Role-based access, audit logging |

### CC2: Communication and Information

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC2.1 - Information quality | Data validation, schema enforcement |
| CC2.2 - Internal communication | Security bulletins, incident notifications |
| CC2.3 - External communication | Status page, security advisories, breach notification |

### CC3: Risk Assessment

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC3.1 - Risk objectives | Annual risk assessment, threat modeling |
| CC3.2 - Risk identification | Vulnerability scanning, penetration testing |
| CC3.3 - Fraud risk | Separation of duties, anomaly detection |
| CC3.4 - Change impact | Change management process, security review |

### CC4: Monitoring Activities

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC4.1 - Ongoing monitoring | 24/7 SOC, automated alerting |
| CC4.2 - Deficiency evaluation | Incident response, root cause analysis |

### CC5: Control Activities

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC5.1 - Control selection | Defense in depth, security controls matrix |
| CC5.2 - Technology controls | Encryption, access control, network security |
| CC5.3 - Policy deployment | Automated policy enforcement, configuration management |

### CC6: Logical and Physical Access

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC6.1 - Access provisioning | RBAC, least privilege, JIT access |
| CC6.2 - Access removal | Automated deprovisioning, access reviews |
| CC6.3 - Authentication | OAuth2, MFA, SSO |
| CC6.4 - Access restrictions | Network segmentation, firewall rules |
| CC6.5 - Physical security | SOC 2 certified data centers (AWS/GCP) |
| CC6.6 - Threat protection | WAF, DDoS protection, IDS/IPS |
| CC6.7 - Transmission security | TLS 1.2+, certificate pinning |
| CC6.8 - Data disposal | Secure deletion, key destruction |

### CC7: System Operations

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC7.1 - Vulnerability management | Weekly scans, CVE tracking, patch SLAs |
| CC7.2 - Anomaly detection | Behavioral analytics, SIEM integration |
| CC7.3 - Incident response | IR playbooks, on-call rotation |
| CC7.4 - Business continuity | Multi-region, automated failover |
| CC7.5 - Disaster recovery | Daily backups, annual DR testing |

### CC8: Change Management

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC8.1 - Change authorization | PR reviews, security approval gates |

### CC9: Risk Mitigation

| Control | IntegrateWise Implementation |
|---------|------------------------------|
| CC9.1 - Vendor management | Third-party security assessments |
| CC9.2 - Business disruption | SLAs, redundancy, geographic distribution |

---

## ISO 27001 Annex A References

### A.5 - Information Security Policies

| Control | Implementation |
|---------|----------------|
| A.5.1.1 | Security policy document, annual review |
| A.5.1.2 | Policy review process, version control |

### A.6 - Organization of Information Security

| Control | Implementation |
|---------|----------------|
| A.6.1.1 | Security roles and responsibilities defined |
| A.6.1.2 | Segregation of duties in RBAC |
| A.6.2.1 | Mobile device policy, MDM |
| A.6.2.2 | Remote work security controls |

### A.7 - Human Resource Security

| Control | Implementation |
|---------|----------------|
| A.7.1.1 | Background checks |
| A.7.2.2 | Security awareness training |
| A.7.3.1 | Termination procedures, access revocation |

### A.8 - Asset Management

| Control | Implementation |
|---------|----------------|
| A.8.1.1 | Asset inventory, tagging |
| A.8.2.1 | Data classification (public, internal, confidential, restricted) |
| A.8.3.1 | Media handling procedures |

### A.9 - Access Control

| Control | Implementation |
|---------|----------------|
| A.9.1.1 | Access control policy |
| A.9.2.1 | User registration, deregistration |
| A.9.2.3 | Privileged access management |
| A.9.4.1 | Information access restriction (ABAC) |
| A.9.4.2 | Secure authentication (MFA) |

### A.10 - Cryptography

| Control | Implementation |
|---------|----------------|
| A.10.1.1 | Encryption policy (AES-256, TLS 1.2+) |
| A.10.1.2 | Key management (KMS, rotation) |

### A.12 - Operations Security

| Control | Implementation |
|---------|----------------|
| A.12.1.2 | Change management |
| A.12.2.1 | Malware protection |
| A.12.3.1 | Backup policy, testing |
| A.12.4.1 | Event logging, audit trails |
| A.12.6.1 | Vulnerability management |

### A.13 - Communications Security

| Control | Implementation |
|---------|----------------|
| A.13.1.1 | Network controls, segmentation |
| A.13.2.1 | Information transfer policies |
| A.13.2.3 | Electronic messaging security |

### A.14 - System Development

| Control | Implementation |
|---------|----------------|
| A.14.1.1 | Security requirements in SDLC |
| A.14.2.1 | Secure development policy |
| A.14.2.3 | Code review, SAST/DAST |
| A.14.2.7 | Outsourced development security |

### A.16 - Incident Management

| Control | Implementation |
|---------|----------------|
| A.16.1.1 | Incident response procedures |
| A.16.1.2 | Incident reporting |
| A.16.1.5 | Incident response, lessons learned |

### A.17 - Business Continuity

| Control | Implementation |
|---------|----------------|
| A.17.1.1 | Business continuity planning |
| A.17.2.1 | Availability controls (multi-region) |

### A.18 - Compliance

| Control | Implementation |
|---------|----------------|
| A.18.1.1 | Legal and regulatory compliance |
| A.18.1.3 | Protection of records |
| A.18.1.4 | Privacy and PII protection |
| A.18.2.1 | Independent security review |

---

## GDPR Data Subject Rights

### Right Implementation Matrix

| Right | Article | IntegrateWise Implementation |
|-------|---------|------------------------------|
| **Right to be informed** | Art. 13-14 | Privacy policy, data collection notices |
| **Right of access** | Art. 15 | Data export API, self-service portal |
| **Right to rectification** | Art. 16 | Edit functionality, data correction API |
| **Right to erasure** | Art. 17 | Delete API, automated data purge |
| **Right to restrict processing** | Art. 18 | Processing suspension, consent management |
| **Right to data portability** | Art. 20 | JSON/CSV export, standard formats |
| **Right to object** | Art. 21 | Opt-out mechanisms, preference center |
| **Automated decision-making** | Art. 22 | Human review option, explanation of logic |

### Data Processing

| Aspect | Implementation |
|--------|----------------|
| Lawful basis | Consent, contract, legitimate interest tracking |
| Purpose limitation | Data use tracking per purpose |
| Data minimization | Collection limits, retention policies |
| Accuracy | Validation, update prompts |
| Storage limitation | Automatic deletion after retention period |
| Integrity & confidentiality | Encryption, access controls |

### Cross-Border Transfer

| Mechanism | Status |
|-----------|--------|
| EU-US Data Privacy Framework | Certified |
| Standard Contractual Clauses | Available |
| Binding Corporate Rules | N/A (SaaS) |

### Data Protection Officer

Contact: dpo@integratewise.com

---

## HIPAA Safeguards

*Available for Business and Enterprise tiers with BAA*

### Administrative Safeguards

| Safeguard | Implementation |
|-----------|----------------|
| Security management | Risk analysis, sanction policy |
| Assigned security responsibility | Designated security officer |
| Workforce security | Background checks, termination procedures |
| Information access management | Access authorization, access controls |
| Security awareness training | Annual HIPAA training |
| Security incident procedures | Incident response plan |
| Contingency plan | Backup, disaster recovery, emergency mode |
| Evaluation | Annual security assessment |
| Business associate contracts | BAA template, vendor management |

### Physical Safeguards

| Safeguard | Implementation |
|-----------|----------------|
| Facility access controls | SOC 2 certified data centers |
| Workstation use | Endpoint security policy |
| Workstation security | MDM, encryption |
| Device and media controls | Secure disposal, data backup |

### Technical Safeguards

| Safeguard | Implementation |
|-----------|----------------|
| Access control | Unique user ID, auto logoff, encryption |
| Audit controls | Comprehensive audit logging |
| Integrity controls | Data validation, error detection |
| Transmission security | TLS 1.2+, encryption in transit |

### PHI Handling

| Capability | Implementation |
|------------|----------------|
| PHI detection | DataSentinel automatic detection |
| PHI encryption | Field-level encryption |
| PHI access logging | Enhanced audit for PHI fields |
| PHI retention | Configurable, minimum 6 years |
| PHI disposal | Certified secure deletion |

---

## Compliance Artifacts

### Available Documents

| Document | Access | Request |
|----------|--------|---------|
| SOC 2 Type II Report | Under NDA | security@integratewise.com |
| ISO 27001 Certificate | Public | Download |
| Penetration Test Summary | Under NDA | security@integratewise.com |
| Data Processing Agreement | Public | Download |
| Business Associate Agreement | Customers | Account settings |
| Security Whitepaper | Public | Download |
| Subprocessor List | Public | Trust center |

### Trust Center

Visit [trust.integratewise.com](https://trust.integratewise.com) for:
- Real-time system status
- Security certifications
- Compliance documents
- Subprocessor list
- Incident history

---

## Cross-References

- [Security Overview](/docs/security/index.md)
- [RBAC/ABAC Matrix](/docs/security/rbac-abac.md)
- [Audit Logging](/docs/security/index.md#audit-logging)
