import { FC } from "react"
import styled from "styled-components"
import { Card } from "../Card"

export interface Organization {
  name: string
  iconSrc: string
  href: string
}

interface Props {
  organizations: Organization[]
}

const Container = styled.div`
  max-width: 350px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: Nunito;
  font-size: 20px;
  line-height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 9px 22px;
`

export const FollowingCard: FC<Props> = ({ organizations }) => (
  <Container>
    <Card
      header="Organizations"
      subheader="Followed"
      initialRowCount={7}
      items={organizations.map(({ name, iconSrc, href }) => {
        return (
          <Item key={name}>
            <img
              src={iconSrc}
              alt={"icon for " + name}
              width="45px"
              height="45px"
              className="rounded-circle"
            />
            <Link href={href} target="_blank" rel="noopener">
              {name}
            </Link>
          </Item>
        )
      })}
    />
  </Container>
)
