import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import Modal from 'components/Modal';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '弹出框-示例'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = {
    modal: [false, false, false, false, false, false]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  /**
   * 显示弹窗
   */
  handleModal = (index: number, visible: boolean): void => {
    const { modal } = this.state;
    this.setState({
      modal: modal.map((_, i) => {
        if (index === i) {
          return visible;
        } else {
          return false;
        }
      })
    });
  };

  /**
   * 处理点击
   */
  handleDetail = (index: number) => {
    this.handleModal(index, true);
  };
  /**
   * 处理点击
   */
  handleSure = () => {
    Taro.showToast({ title: '点击了确定' });
  };

  render() {
    const { modal } = this.state;
    return (
      <View className="demoContainer">
        <View className="header">
          <Text className="title">Modal 弹出框</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="默认用法" type="select" detail="查看效果" onClickDetail={this.handleDetail.bind(this, 0)} />
          <ItemRow title="顶部弹出" type="select" detail="查看效果" onClickDetail={this.handleDetail.bind(this, 1)} />
          <ItemRow title="居中圆角" type="select" detail="查看效果" onClickDetail={this.handleDetail.bind(this, 2)} />
          <ItemRow title="显示按钮" type="select" detail="查看效果" onClickDetail={this.handleDetail.bind(this, 3)} />
        </View>

        <Modal visible={modal[0]} title="弹窗的标题" onClose={this.handleModal.bind(this, 0, false)}>
          <View className="demoModalBody">
            <View className="demoContent">弹窗的内容。。。</View>
            <View className="demoContent">弹窗的内容。。。</View>
          </View>
        </Modal>

        <Modal visible={modal[1]} title="弹窗的标题" center onClose={this.handleModal.bind(this, 1, false)}>
          <View className="demoModalBody">
            <View className="demoContent">弹窗的内容。。。</View>
            <View className="demoContent">弹窗的内容。。。</View>
          </View>
        </Modal>

        <Modal visible={modal[2]} title="弹窗的标题" center radius onClose={this.handleModal.bind(this, 2, false)}>
          <View className="demoModalBody">
            <View className="demoContent">弹窗的内容。。。</View>
            <View className="demoContent">弹窗的内容。。。</View>
          </View>
        </Modal>

        <Modal
          center
          radius
          showFooter
          title="弹窗的标题"
          visible={modal[3]}
          onClose={this.handleModal.bind(this, 3, false)}
          onSure={this.handleSure}
        >
          <View className="demoModalBody">
            <View className="demoContent">弹窗的内容。。。</View>
            <View className="demoContent">弹窗的内容。。。</View>
          </View>
        </Modal>
      </View>
    );
  }
}
