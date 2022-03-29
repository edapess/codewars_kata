function getParticipants(handshakes) {
    // n*(n-1) / 2 = total
    
    let farmers = 1
    while (farmers*(farmers - 1)/2 < handshakes){
        farmers++
    }
    return farmers
    }