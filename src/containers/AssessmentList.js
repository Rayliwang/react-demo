import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoldList } from '../redux/action';


class AssessmentList extends Component {

  componentDidMount() {
    const { getMoldList } = this.props;
    getMoldList();
  };

  render() {
    return (
      <div className="assessment-list">
        <h2 className="header">标题</h2>
        <ul className="content">
          <li className="assessment">
            <span className="date">2016年10月14日</span>
            <span className="result result-low">低风险</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToPropsAssessmentMold = (state) => {
  return {
    moldList: state.moldList
  }
}
const mapDispatchToPropsAssessmentMold = (dispatch) => {
  return {
    getMoldList: () => {
      dispatch(getMoldList());
    }
  }
}
export default connect(mapStateToPropsAssessmentMold, mapDispatchToPropsAssessmentMold)(AssessmentList);
