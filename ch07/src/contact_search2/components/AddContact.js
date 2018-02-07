import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        this.nameInput.focus()    
    }
    
    // 저장 이벤트를 받아 부모에게 이벤트와 값을 전달함.
    save() {
        let name = this.nameInput.value;
        let tel = this.telInput.value;
        let address = this.addressInput.value;
        if (name !=="" && tel !=="" && address !== "") {
            this.props.addContact(name, tel, address);
        } else {
            alert("모든 필드를 입력해주세요")
        }
    }

    // 취소 이벤트를 받아 부모에게 이벤트을 전달함.
    cancel() {
        this.props.changeShowAddContact(false)
    }

    render() {
        return (
            <div className="modal2">
                <div className="form">
                    <h3 className="heading">:: 새 연락처 추가</h3>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" name="name" className="long"
                            placeholder="이름을 입력하세요"
                            ref={(name) => { this.nameInput = name; }} />
                    </div>
                    <div className="form-group">
                        <label>전화번호</label>
                        <input type="text" name="tel" className="long" 
                            placeholder="전화번호를 입력하세요"
                            ref={(tel) => { this.telInput = tel; }} />
                    </div>
                    <div className="form-group">
                        <label>주 소</label>
                        <input type="text" name="address" className="long"
                            placeholder="주소를 입력하세요"
                            ref={(address) => { this.addressInput = address; }} />
                    </div>
                    <div className="form-group">
                        <div>&nbsp;</div>
                        {/* 저장 및 취소 버튼 추가, 클릭 시 함수를 호출함.*/}
                        <input type="button" className="btn btn-primary" 
                            value="저 장" onClick={this.save} />{' '}
                        <input type="button" className="btn btn-primary" 
                            value="취 소" onClick={this.cancel} />
                    </div>
        
                </div>
            </div>
        );
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    changeShowAddContact: PropTypes.func.isRequired
}

export default AddContact;