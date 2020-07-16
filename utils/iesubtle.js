export default {
  generateKey: function(algorithm, extractable, keyUsages) {
    return new Promise(function(resolve, reject) {
      var op = window.msCrypto.subtle.generateKey(
        algorithm,
        extractable,
        keyUsages
      )
      op.onerror = function(evt) {
        reject(evt.toString())
      }

      op.oncomplete = function(evt) {
        resolve(evt.target.result)
      }
    })
  },
  exportKey: function(format, key) {
    return new Promise(function(resolve, reject) {
      var op = window.msCrypto.subtle.exportKey(format, key)
      op.onerror = function(evt) {
        reject(evt.toString())
      }

      op.oncomplete = function(evt) {
        resolve(evt.target.result)
      }
    })
  },
  importKey: function(format, keyData, algorithm, extractable, keyUsages) {
    return new Promise(function(resolve, reject) {
      var op = window.msCrypto.subtle.importKey(
        format,
        keyData,
        algorithm,
        extractable,
        keyUsages
      )
      op.onerror = function(evt) {
        reject(evt.toString())
      }

      op.oncomplete = function(evt) {
        resolve(evt.target.result)
      }
    })
  },
  encrypt: function(algorithm, key, buffer) {
    return new Promise(function(resolve, reject) {
      var op = window.msCrypto.subtle.encrypt(algorithm, key, buffer)
      op.onerror = function(evt) {
        reject(evt.toString())
      }

      op.oncomplete = function(evt) {
        resolve(evt.target.result)
      }
    })
  },
  decrypt: function(algorithm, key, buffer) {
    return new Promise(function(resolve, reject) {
      var op = window.msCrypto.subtle.decrypt(algorithm, key, buffer)
      op.onerror = function(evt) {
        reject(evt.toString())
      }

      op.oncomplete = function(evt) {
        resolve(evt.target.result)
      }
    })
  }
}
