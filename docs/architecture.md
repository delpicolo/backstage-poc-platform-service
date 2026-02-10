# Architecture

## Context

This service exists as part of the Developer Platform system to validate Backstage governance capabilities.

## Architecture Style

- TypeScript
- Layered architecture
- CI via GitHub Actions

## Governance Model

- ADRs stored in `/docs/adr`
- CI required on every PR
- Dependabot enabled
- Ownership declared in catalog-info.yaml

## Future Evolution

- Add SonarCloud integration
- Add automated maturity score
- Add dependency mapping between services
