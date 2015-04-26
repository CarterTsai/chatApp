import { Reapp,
         React,
         NestedViewList,
         View, Button, Container,
         TextArea
} from 'reapp-kit';

class Home extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="chatApp">
            <div style={styles.topBlock}>
            </div>
            <div style={styles.bottomBlock}>
                <div style={styles.textareaBox}>
                    <TextArea style={styles.textarea}></TextArea>
                </div>
                <div style={styles.buttonBox}>
                    <Button style={styles.button}>傳送</Button>
                </div>
            </div>
        </View>
        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/

const styles = {
    topBlock: {
        height: '85vh',
        background: "#ebcdee"
    },
    bottomBlock: {
        height: '5vh',
        display: 'inline-block'
    },
    textareaBox: {
        float: 'left',
        width: '70%',
        height: '7vh',
        paddingRight: '5px',
        paddingTop: '5px'
    },
    textarea: {
        resize: 'none',
        border: '1px solid #307cff'
    },
    buttonBox: {
        paddingTop: '5px',
        float: 'left',
        width: '30%'
    },
    button: {
        height: '5vh',
        float: 'left'
    }
};
