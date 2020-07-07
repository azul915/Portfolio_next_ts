import React from "react"
import Typed from "react-typed"
import { makeStyles } from "@material-ui/core/styles"
import { Cont } from "../../interfaces"
import cyan from "@material-ui/core/colors/cyan"

const useStyles = makeStyles({
  typed: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  background: {
    position: "relative",
    backgroundColor: cyan[400],
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    overflow: "hidden",
    width: "100%",
    height: "100vh",
  },
  titleWrapper: {
    position: "absolute",
    textAlign: "center",
    top: "35%",
    left: 0,
    right: 0,
  },
  titleHeader: {
    font: "normal normal 300 10vw Roboto",
    color: "white",
    "@media (min-width: 600px)": {
      fontSize: 60,
    },
  },
  titleLead: {
    fontSize: "5vw",
    "@media (min-width: 480px)": {
      fontSize: 24,
    },
  },
})

type Props = {
    cont: Cont
}

const WallPaper: React.FC<Props> = (props: Props) => {

  const classes = useStyles()

  const cont = props.cont

  return (
    <>
      <div className={classes.background}>
        <div className={classes.titleWrapper}>
          <h1 className={classes.titleHeader}>
            <Typed
              strings={cont.messages}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          <br />
            <small className={classes.titleLead}>
              Software Engineer at Japan
            </small>
          </h1>
        </div>
      </div>
    </>
  )

}

export default WallPaper